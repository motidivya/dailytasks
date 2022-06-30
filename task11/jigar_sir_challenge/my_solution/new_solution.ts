interface IUICreator{
    frame: WindowsFrame | MacFrame;
    button: WindowsButton | MacButton;
}

class MacUICreator implements IUICreator{
    frame: MacFrame;
    button: MacButton;

}

class WindowsUICreator implements IUICreator{
    frame: WindowsFrame;
    button: WindowsButton;
}

class UICreator implements IUICreator{
    frame : 
}