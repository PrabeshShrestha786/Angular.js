# PipesApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.1.1.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


The AsyncPipe is used in Angular to work with asynchronous data such as Observables or Promises directly in the template. Normally, when using an Observable, you would have to subscribe to it in the component class and manually unsubscribe to avoid memory leaks. The AsyncPipe handles this automatically.

In the example, the component defines an Observable that emits values over time. Instead of subscribing to this Observable in the TypeScript file, the template uses the | async pipe to unwrap the emitted values. Whenever the Observable emits a new value, the view is updated automatically.

The AsyncPipe also takes care of subscribing when the component is created and unsubscribing when the component is destroyed. This makes the code cleaner, safer, and easier to read. Using AsyncPipe reduces boilerplate code and prevents common issues such as forgotten subscriptions.

In short, the AsyncPipe listens to asynchronous data, updates the view when new data arrives, and manages subscriptions automatically without extra code in the component.