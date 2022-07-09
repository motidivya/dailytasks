# The below app creates the entire user interface with windows look and feel. How would I modify the classes UICreator and MyApp such that it is easy to switch between windows and Mac UserInterface. (Hint: Use interfaces like IButton, IFrame, IUICreator and concrete classes like MacUICreator and WindowsUICreator).
```
class WindowsButton {
}

class MacButton {
}

class WindowsFrame {
}

class MacFrame {
}

class UICreator {
   WindowsButton CreateWindowsButton();
 
   MacButton CreateMacButton();
   
   WindowsFrame CreateWindowsFrame();
   
   MacFrame CreateMacFrame();    
}

class MyApp {
   
    void Initialize() {

        UICreator c = new UICreator();
         
         WindowsFrame f = c.CreateWindowsFrame();
         WindowsButton b1 = c.CreateWindowsButton();
         WindowsButton b2 = c.CreateWindowsButton();

         f.AddButton(b1);
        f.AddButton(b2);

    }

}
```