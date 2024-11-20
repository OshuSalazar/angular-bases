import { NgModule } from "@angular/core";
import { counterComponet } from "./components/counter/counter.componet";

@NgModule ({
    declarations:[
        counterComponet
    ],
    exports:[
        counterComponet
    ]
})


export class CounterModule {}