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

class MacUICreator implements UICreator{
    

}

class WindowsUICreator implements UICreator{
}

interface IButton extends WindowsButton, MacButton{
    ibutton:IButton;
}

interface IFrame extends WindowsFrame, MacFrame{
    iframe:IFrame;
}

interface IUICreator extends WindowsUICreator, MacUICreator{
    iuicreator:IUICreator;
}