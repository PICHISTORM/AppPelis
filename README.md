# PeliculasApp

Aplicación móvil desarrollada con Ionic y Angular para explorar películas desde una API externa. La app está organizada en pestañas para ver películas destacadas y populares, buscar títulos y gestionar favoritos. También incluye una vista de detalle para revisar información de cada película y utiliza Capacitor para funciones nativas como almacenamiento local de preferencias.

## Tecnologías y dependencias

- Angular 20
- Ionic 8
- Capacitor 8
- RxJS
- Swiper 11.2.10
- Ionicons
- `@capacitor/preferences` para persistencia local
- TypeScript

## Instalación y ejecución local

### Requisitos previos

- Node.js y npm instalados
- Ionic CLI instalado globalmente, si deseas usar los comandos de Ionic

### Instalación

```bash
npm install
```

Si necesitas reinstalar la dependencia de preferencias de Capacitor:

```bash
npm install @capacitor/preferences
```

### Ejecución en desarrollo

```bash
npm start
```

Esto levanta la aplicación en modo desarrollo.

### Compilación

```bash
npm run build
```

### Pruebas

```bash
npm test
```


### levantarla en un navegador en localhost

ng serve -o
