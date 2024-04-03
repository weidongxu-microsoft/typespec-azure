---
jsApi: true
title: "[I] SdkCredentialParameter"

---
## Extends

- [`SdkModelPropertyTypeBase`](SdkModelPropertyTypeBase.md)

## Properties

| Property | Type | Description | Overrides | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `__raw?` | `ModelProperty` | - | [`SdkModelPropertyTypeBase`](SdkModelPropertyTypeBase.md).`__raw` | [`SdkModelPropertyTypeBase`](SdkModelPropertyTypeBase.md).`__raw` |
| `apiVersions` | `string`[] | - | [`SdkModelPropertyTypeBase`](SdkModelPropertyTypeBase.md).`apiVersions` | [`SdkModelPropertyTypeBase`](SdkModelPropertyTypeBase.md).`apiVersions` |
| `clientDefaultValue?` | `any` | - | [`SdkModelPropertyTypeBase`](SdkModelPropertyTypeBase.md).`clientDefaultValue` | [`SdkModelPropertyTypeBase`](SdkModelPropertyTypeBase.md).`clientDefaultValue` |
| `description?` | `string` | - | [`SdkModelPropertyTypeBase`](SdkModelPropertyTypeBase.md).`description` | [`SdkModelPropertyTypeBase`](SdkModelPropertyTypeBase.md).`description` |
| `details?` | `string` | - | [`SdkModelPropertyTypeBase`](SdkModelPropertyTypeBase.md).`details` | [`SdkModelPropertyTypeBase`](SdkModelPropertyTypeBase.md).`details` |
| `isApiVersionParam` | `boolean` | - | [`SdkModelPropertyTypeBase`](SdkModelPropertyTypeBase.md).`isApiVersionParam` | [`SdkModelPropertyTypeBase`](SdkModelPropertyTypeBase.md).`isApiVersionParam` |
| `isGeneratedName` | `boolean` | - | [`SdkModelPropertyTypeBase`](SdkModelPropertyTypeBase.md).`isGeneratedName` | [`SdkModelPropertyTypeBase`](SdkModelPropertyTypeBase.md).`isGeneratedName` |
| `kind` | `"credential"` | - | - | - |
| `name` | `string` | - | [`SdkModelPropertyTypeBase`](SdkModelPropertyTypeBase.md).`name` | [`SdkModelPropertyTypeBase`](SdkModelPropertyTypeBase.md).`name` |
| ~~`nameInClient`~~ | `string` | **Deprecated**<br />This property is deprecated. Use `.name` instead.<br />https://github.com/Azure/typespec-azure/issues/446 | [`SdkModelPropertyTypeBase`](SdkModelPropertyTypeBase.md).`nameInClient` | [`SdkModelPropertyTypeBase`](SdkModelPropertyTypeBase.md).`nameInClient` |
| `nullable` | `boolean` | - | [`SdkModelPropertyTypeBase`](SdkModelPropertyTypeBase.md).`nullable` | [`SdkModelPropertyTypeBase`](SdkModelPropertyTypeBase.md).`nullable` |
| `onClient` | `true` | - | [`SdkModelPropertyTypeBase`](SdkModelPropertyTypeBase.md).`onClient` | [`SdkModelPropertyTypeBase`](SdkModelPropertyTypeBase.md).`onClient` |
| `optional` | `boolean` | - | [`SdkModelPropertyTypeBase`](SdkModelPropertyTypeBase.md).`optional` | [`SdkModelPropertyTypeBase`](SdkModelPropertyTypeBase.md).`optional` |
| `type` | [`SdkUnionType`](SdkUnionType.md) \| [`SdkCredentialType`](SdkCredentialType.md) | - | [`SdkModelPropertyTypeBase`](SdkModelPropertyTypeBase.md).`type` | [`SdkModelPropertyTypeBase`](SdkModelPropertyTypeBase.md).`type` |