gdjs.StartCode = {};
gdjs.StartCode.GDBgObjects1= [];
gdjs.StartCode.GDBgObjects2= [];
gdjs.StartCode.GDBg2Objects1= [];
gdjs.StartCode.GDBg2Objects2= [];
gdjs.StartCode.GDButtonObjects1= [];
gdjs.StartCode.GDButtonObjects2= [];
gdjs.StartCode.GDAimanObjects1= [];
gdjs.StartCode.GDAimanObjects2= [];
gdjs.StartCode.GDLogoObjects1= [];
gdjs.StartCode.GDLogoObjects2= [];


gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDButtonObjects1Objects = Hashtable.newFrom({"Button": gdjs.StartCode.GDButtonObjects1});
gdjs.StartCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9703324);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Asset\\Click_Sound_Effect_HD__Uzj3CD0FUhA_140.mp3", false, 100, 1);
}}

}


};gdjs.StartCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Asset\\MASA.mp3", 1, false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.StartCode.GDButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Instruction");
}
{ //Subevents
gdjs.StartCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.StartCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartCode.GDBgObjects1.length = 0;
gdjs.StartCode.GDBgObjects2.length = 0;
gdjs.StartCode.GDBg2Objects1.length = 0;
gdjs.StartCode.GDBg2Objects2.length = 0;
gdjs.StartCode.GDButtonObjects1.length = 0;
gdjs.StartCode.GDButtonObjects2.length = 0;
gdjs.StartCode.GDAimanObjects1.length = 0;
gdjs.StartCode.GDAimanObjects2.length = 0;
gdjs.StartCode.GDLogoObjects1.length = 0;
gdjs.StartCode.GDLogoObjects2.length = 0;

gdjs.StartCode.eventsList1(runtimeScene);

return;

}

gdjs['StartCode'] = gdjs.StartCode;
