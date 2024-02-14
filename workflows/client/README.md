Generate code from a openapi spec file.


```
$ npx @rtk-query/codegen-openapi openapi-config.ts
```

After generating code, add the following export at ./coreApi.ts

```
export { api } from './baseApi';
```
