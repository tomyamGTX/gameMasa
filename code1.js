gdjs.InstructionCode = {};
gdjs.InstructionCode.GDIntsructionObjects1= [];
gdjs.InstructionCode.GDIntsructionObjects2= [];
gdjs.InstructionCode.GDNewTextObjects1= [];
gdjs.InstructionCode.GDNewTextObjects2= [];
gdjs.InstructionCode.GDMinitObjects1= [];
gdjs.InstructionCode.GDMinitObjects2= [];
gdjs.InstructionCode.GDJamObjects1= [];
gdjs.InstructionCode.GDJamObjects2= [];
gdjs.InstructionCode.GDbuttonObjects1= [];
gdjs.InstructionCode.GDbuttonObjects2= [];


gdjs.InstructionCode.mapOfGDgdjs_9546InstructionCode_9546GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.InstructionCode.GDbuttonObjects1});
gdjs.InstructionCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9710556);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Asset\\Click_Sound_Effect_HD__Uzj3CD0FUhA_140.mp3", false, 100, 1);
}}

}


};gdjs.InstructionCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.InstructionCode.GDbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.InstructionCode.mapOfGDgdjs_9546InstructionCode_9546GDbuttonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Q1");
}
{ //Subevents
gdjs.InstructionCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.InstructionCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.InstructionCode.GDIntsructionObjects1.length = 0;
gdjs.InstructionCode.GDIntsructionObjects2.length = 0;
gdjs.InstructionCode.GDNewTextObjects1.length = 0;
gdjs.InstructionCode.GDNewTextObjects2.length = 0;
gdjs.InstructionCode.GDMinitObjects1.length = 0;
gdjs.InstructionCode.GDMinitObjects2.length = 0;
gdjs.InstructionCode.GDJamObjects1.length = 0;
gdjs.InstructionCode.GDJamObjects2.length = 0;
gdjs.InstructionCode.GDbuttonObjects1.length = 0;
gdjs.InstructionCode.GDbuttonObjects2.length = 0;

gdjs.InstructionCode.eventsList1(runtimeScene);

return;

}

gdjs['InstructionCode'] = gdjs.InstructionCode;
