class WindowsButton {
    button: object;
    constructor(button:object){
        // Initialising variables
        this.button = button;
    }
    CreateWindowsButton(){
        // Do Something
    }
}

class MacButton {
    button: object;
    constructor(button:object){
        // Initialising variables
        this.button = button;
    }
    CreateMacButton(){
        // Do Something
    }
}

class WindowsFrame {
    frame:object;
    constructor(frame:object){
        // Initialising variables
        this.frame = frame;
    }
    CreateWindowsFrame(){
        // Do Something
    }
    Addbutton(){
        // Do Something
    }
}

class MacFrame {
    frame:object;
    constructor(frame:object){
        // Initialising variables
        this.frame = frame;
    }
    CreateMacFrame(){
        // Do Something
    }
    AddButton(){
        // Do Something
    }
}

class UICreator{

    windowsUICreator:WindowsUICreator;
    macUICreator:MacUICreator;
    
    constructor(windowsUICreator:WindowsUICreator, macUICreator:MacUICreator){
        this.windowsUICreator = windowsUICreator;
        this.macUICreator = macUICreator;
    }
}

class MyApp {
    uiCreator:UICreator;
    constructor(uiCreator:UICreator){
        this.uiCreator = uiCreator;
    }

    c:UICreator = new UICreator(WindowsUICreator, MacUICreator);
    f:WindowsFrame = this.c.windowsUICreator.windowsIframe;
    b1:WindowsButton = this.c.windowsUICreator.windowsButton;
    b2:WindowsButton = this.c.windowsUICreator.windowsButton;

    f.AddButton(b1);
    f.AddButton(b2);


}


interface IButton extends WindowsButton, MacButton{
    // Some variable
    windowsButton:WindowsButton;
    macButton:MacButton;
}

interface IFrame extends WindowsFrame, MacFrame{
    // Some variables
    windowsFrame:WindowsFrame;
    macFrame:MacFrame;
}

class MacUICreator{
    macButton:IButton;
    macIframe:IFrame;
    constructor(macButton:IButton, macIFrame:IFrame){
        // Initializing variables
        this.macButton = macButton;
        this.macIframe = macIFrame
    }
}

class WindowsUICreator{
    windowsButton:IButton;
    windowsIframe:IFrame;
    constructor(windowsButton:IButton, windowsIFrame:IFrame){
        // Initializing variables
        this.windowsButton = windowsButton;
        this.windowsIframe = windowsIFrame
    }
}


