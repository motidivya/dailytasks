```
interface IFireAlarmHandler {
    void HandleFire();
}

class Person implements IFireAlarmHandler {
    string name;
    int age;
    void HandleFire();
}

class Dog implements IFireAlarmHandler {
    string type;
    void HandleFire();
}

class Sprinkler implements IFireAlarmHandler {
    void HandleFire();
}

class FireAlarm {
    Array<IFireAlarmHandler> handlers;
    void AddHandlerForFireEvent(IFireAlarmHandler h);
    void OnFire() {
    foreach(IFireAlarmHandler h in handlers)
    h.HandleFire();
    }
}

```