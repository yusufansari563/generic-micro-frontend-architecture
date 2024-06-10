# FRONTEND ARCHITECTURE 

### This architecture is build under the consideration of generic and reusability

```
/projects
    /main
    /lib-main
    /mfe1
    /lib-mfe1
    /mfe2
    /lib-mfe2
```

### MFE module Components

1- This architecture reflects the flexibility in the build as well as in the run time.

2- If you want to run application as a monolithic so just run ```main```  project entire project will start as a monolithic app.

3- If want to run as a pieces of micro-frontend, then run ``` lib-main``` or ```lib-mfe1``` or ```lib-mfe2```.

4- If in future wants to expand and create more mfe just duplicate on of the ```lib-mfe1``` and ```mfe1``` and follow the same code pattern to adapt the architecture.

5- This architecture is not limited to only react application it can also support the ```angular vue.js and other csr application``` wrap them with webpack env carefully!!!.

    Idea behind small mfe[index] and lib-mfe[index] is when it comes to the large application(500 screens or more) if run with monolithic, development time can go higher due to the length of application so we divided that into much more smaller pieces to increase productivity and scalability. and obviously we have the ability to work as mono or micro architecture in the development as well as in production(production configuration are not yet in place).

### Shared components, utility and configuration.

1- It consist of ```shared``` MFE to share the components global configuration etc.

2- Routes can also used as shared component to place some business logic.

#### state-management

1- redux persistent uses local storage so that can come handy when dealing with react mfe projects we can provide and wrap each mfe with same store to access the things.

2- As planning to use local storage(redux persistent) so different frame can also get a hold of it.

3- Redux is implemented but one more best practice can be more scalable in mfe architecture is using observables.
i already have one more repo with rxjs with react that can be more robust 

[REACT-POKEDEX-RXJS]("https://github.com/yusufansari563/react-pokedex-rxjs")

[LIVE DEMO](https://react-pokedex-rxjs-red.vercel.app/)

    Note: Event driven communication not used because some times difficult to manage and memory cleanup can be difficult.

For large projects it is preferable to create own component or some minimal component library and create our own wrapper around it.

Primeflex and primeReact is used here.