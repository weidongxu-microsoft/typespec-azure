import { Program, createRule } from "@typespec/compiler";

import { getLroMetadata } from "@azure-tools/typespec-azure-core";
import { getArmResources } from "../resource.js";

/**
 * Verify that a delete operation only
 */
export const armDeleteResponseCodesRule = createRule({
  name: "arm-delete-operation-response-codes",
  severity: "warning",
  url: "https://azure.github.io/typespec-azure/docs/libraries/azure-resource-manager/rules/delete-operation-response-codes",
  description: "Ensure delete operations have the appropriate status codes.",
  messages: {
    sync: `Synchronous delete operations must have 200, 204 and default responses. They must not have any other responses. Consider using the 'ArmResourceDeleteSync' template.`,
    async: `Long-running delete operations must have 202, 204 and default responses. They must not have any other responses. Consider using the 'ArmResourceDeleteWithoutOkAsync' template.`,
  },
  create(context) {
    return {
      root: (program: Program) => {
        const resources = getArmResources(program);
        for (const resource of resources) {
          if (resource.operations.lifecycle.delete) {
            const deleteOperation = resource.operations.lifecycle.delete;
            const isAsync =
              getLroMetadata(context.program, deleteOperation.operation) !== undefined;
            const httpOp = deleteOperation.httpOperation;
            const statusCodes = new Set([...httpOp.responses.map((r) => r.statusCodes.toString())]);
            const expected = new Set(["204", "*"]);
            expected.add(isAsync ? "202" : "200");

            if (
              statusCodes.size !== expected.size ||
              ![...statusCodes].every((v) => expected.has(v))
            ) {
              context.reportDiagnostic({
                target: deleteOperation.operation,
                messageId: isAsync ? "async" : "sync",
              });
            }
          }
        }
      },
    };
  },
});
