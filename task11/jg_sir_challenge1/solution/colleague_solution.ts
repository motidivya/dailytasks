class WindowsButton implements IButton {
}

class MacButton implements IButton {
}

interface IFrame {
    void AddButton(IButton);
} 


class WindowsFrame implements IFrame{
    void AddButton(IButton) {
    }
}


class MacFrame implements IFrame{
    void AddButton(IButton btn) {
    }
}

interface IUICreator
{
    IFrame CreateFrame();
    IButton CreateButton();
}

class MacUICreator implements IUICreator
{
    IFrame CreateFrame()
    {
        return new MacFrame();
    }
    
    IButton CreateButton()
    {
        return new MacButton();
    }
}

class WindowsUICreator implements IUICreator
{
    IFrame CreateFrame()
    {
        return new WindowsFrame();
    }
    
    IButton CreateButton()
    {
        return new WindowsButton();
    }
}
interface IButton
{
}


class MyApp {
   
    void Initialize(IUICreator c) {

        
        WindowsFrame f = c.CreateFrame();
        WindowsButton b1 = c.CreateButton();
        WindowsButton b2 = c.CreateButton();

        f.AddButton(b1);
        f.AddButton(b2);

    }

}