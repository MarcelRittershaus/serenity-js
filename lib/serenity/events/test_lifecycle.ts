import {DomainEvent, DomainEventHandler} from "./eventbus";
import {RuntimeInterfaceDescriptor} from "../typesafety";
import {Scenario, TestOutcome, Step, StepOutcome} from "../domain";


/*
 Domain events:
 - Scenario Started                          // cucumber scenario or a mocha test
    - Scenario Step Started                 // cucumber step or screenplay test
        - Scenario Step Started/Finished
        ...
    ...
 - Scenario Step Finished
 ...
 - Scenario Step Finished
 ...

 - Scenario Finished
 */

// todo: maybe use reflect-metadata instead of all those hand-roller interface descriptors?

export class TestIsStarted extends DomainEvent<Scenario> {
    static get interface(): {new (): RuntimeInterfaceDescriptor} {
        return TestIsStartedInterface;
    }
}

export class TestIsStartedInterface implements RuntimeInterfaceDescriptor {
    methodNames:string[] = ['value'];
    className:string     = 'TestIsStartedInterface';
}

export class TestIsFinished extends DomainEvent<Scenario> {
    static get interface(): {new (): RuntimeInterfaceDescriptor} {
        return TestIsFinishedInterface;
    }
}

export class TestIsFinishedInterface implements RuntimeInterfaceDescriptor {
    methodNames:string[] = ['value'];
    className:string     = 'TestIsFinishedInterface';
}

export class TestIsCompleted extends DomainEvent<TestOutcome> {
    static get interface(): {new (): RuntimeInterfaceDescriptor} {
        return TestIsCompletedInterface;
    }
}

export class TestIsCompletedInterface implements RuntimeInterfaceDescriptor {
    methodNames:string[] = ['value'];
    className:string     = 'TestIsCompletedInterface';
}

export class TestStepIsStarted extends DomainEvent<Step> {
    static get interface(): {new (): RuntimeInterfaceDescriptor} {
        return TestStepIsStartedInterface;
    }
}

export class TestStepIsStartedInterface implements RuntimeInterfaceDescriptor {
    methodNames:string[] = ['value'];
    className:string     = 'TestStepIsStartedInterface';
}

export class TestStepIsCompleted extends DomainEvent<StepOutcome> {
    static get interface(): {new (): RuntimeInterfaceDescriptor} {
        return TestStepIsCompletedInterface;
    }
}

export class TestStepIsCompletedInterface implements RuntimeInterfaceDescriptor {
    methodNames:string[] = ['value'];
    className:string     = 'TestStepIsCompletedInterface';
}

export class TestStepIsFinished extends DomainEvent<Step> {
    static get interface(): {new (): RuntimeInterfaceDescriptor} {
        return TestStepIsFinishedInterface;
    }
}

export class TestStepIsFinishedInterface implements RuntimeInterfaceDescriptor {
    methodNames:string[] = ['value'];
    className:string     = 'TestStepIsFinishedInterface';
}

// ----------------------------------------------------------------------------
// event handlers

export interface TestLifecycleListener extends DomainEventHandler {
    whenTestIsStarted       (event: TestIsStarted);
    whenTestIsCompleted     (event: TestIsCompleted);
    whenTestIsFinished      (event: TestIsFinished);
    whenTestStepIsStarted   (event: TestStepIsStarted);
    whenTestStepIsCompleted (event: TestStepIsCompleted);
    whenTestStepIsFinished  (event: TestStepIsFinished);
}

export class TestLifecycleListenerInterface implements RuntimeInterfaceDescriptor {
    methodNames = [
        'whenTestIsStarted',
        'whenTestIsCompleted',
        'whenTestIsFinished',
        'whenTestStepIsStarted',
        'whenTestStepIsCompleted',
        'whenTestStepIsFinished'
    ];
    className   = 'TestLifecycleListenerInterface';
}