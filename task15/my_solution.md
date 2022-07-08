# My Solution
```
class Person {
    string name;
    int age;
    void HandleFire();
}


class Dog {
    string type;
    void HandleFire();
}


class Sprinkler {
    void HandleFire();
}

class FireAlarm {
    Array<Person> persons;
    Array<Dog> dogs;
    Array<Sprinkler> sprinklers;
    void AddPersonForFireEvent(Person p);
    void AddDogForFireEvent(Dog d);
    void AddSprinklerForFireEvent(Sprinkler s);
    void OnFire() {
    foreach(Person p in persons)
        p.HandleFire();
    foreach(Dog d in dogs)
        d.HandleFire();
    foreach(Sprinkler s in sprinklers)
        s.HandleFire();
    }
}
```
### What I thought
```
class Entity{
    void HandleFire();
}
```