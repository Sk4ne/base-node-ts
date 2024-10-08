# Notas fase de desarrollo Módulo Mantenimiento
`INICIO: Martes 8 octubre 2024`

## Pasos para configurar la api desde cero

<!-- > BLOCKQUOTES - Dorothy followed her through many of the beautiful rooms in her castle.
> - list one
> - list two
> - list three -->

1. Instalamos estos paquetes: npm install typescript ts-node --save-dev
   - `typescript:` El compilador de TypeScript
   - `ts-node:` Permite ejecutar TypeScript en Nodejs sin necesidad de compilarlo
   - `@types/node`: Son los tipos para Node.js necesarios para TypeScript 

2. configuramos el archivo `tscofig.json`

```js
{
  "compilerOptions": {
    "target": "ES6",                          // Versión de JavaScript de salida
    "module": "commonjs",                     // Sistema de módulos de Node.js
    "strict": true,                           // Habilitar verificaciones estrictas
    "esModuleInterop": true,                  // Interoperabilidad con módulos ES
    "skipLibCheck": true,                     // Omitir comprobaciones de bibliotecas
    "forceConsistentCasingInFileNames": true, // Asegura que los nombres de archivo coincidan
    "outDir": "./dist",                       // Directorio de salida
    "rootDir": "./src"                        // Directorio de entrada
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

3. configuramos el archivo `package.json`
   - "dev": "nodemon --exec ts-node ./src/index.ts"

> TIP:
> `npm:` Instala paquetes `npx:` Ejecuta paquetes (locales o remotos) sin instalarlos globalmente

4. Instalamos los siguientes paquetes:
   - cors, datejs,dayjs-plugin-utc,dotenv,express,express-validator,jsonwebtoken,mongoose,morgan,multer,nodemailer,swagger-jsdoc,swagger-ui-express

5. Configuramos el modelo de datos
6. Configuramos el controller
7. Configuramos un endpoint
8. Configuramos una carpeta llamada db/config.ts
9. Configuramos el archivo .env