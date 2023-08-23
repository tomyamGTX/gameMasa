gdjs.MainCode = {};
gdjs.MainCode.GDMainObjects1= [];
gdjs.MainCode.GDMainObjects2= [];
gdjs.MainCode.GDAimanObjects1= [];
gdjs.MainCode.GDAimanObjects2= [];
gdjs.MainCode.GDNewTextObjects1= [];
gdjs.MainCode.GDNewTextObjects2= [];
gdjs.MainCode.GDbackObjects1= [];
gdjs.MainCode.GDbackObjects2= [];
gdjs.MainCode.GDNewText2Objects1= [];
gdjs.MainCode.GDNewText2Objects2= [];


gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDNewTextObjects1Objects = Hashtable.newFrom({"NewText": gdjs.MainCode.GDNewTextObjects1});
gdjs.MainCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9811340);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Asset\\Click_Sound_Effect_HD__Uzj3CD0FUhA_140.mp3", false, 100, 1);
}}

}


};gdjs.MainCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Asset\\Celebration_Sound_Effect_UoSMKxjnleo_140.mp3", 1, false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.MainCode.GDNewTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDNewTextObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Start");
}
{ //Subevents
gdjs.MainCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.MainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainCode.GDMainObjects1.length = 0;
gdjs.MainCode.GDMainObjects2.length = 0;
gdjs.MainCode.GDAimanObjects1.length = 0;
gdjs.MainCode.GDAimanObjects2.length = 0;
gdjs.MainCode.GDNewTextObjects1.length = 0;
gdjs.MainCode.GDNewTextObjects2.length = 0;
gdjs.MainCode.GDbackObjects1.length = 0;
gdjs.MainCode.GDbackObjects2.length = 0;
gdjs.MainCode.GDNewText2Objects1.length = 0;
gdjs.MainCode.GDNewText2Objects2.length = 0;

gdjs.MainCode.eventsList1(runtimeScene);

return;

}

gdjs['MainCode'] = gdjs.MainCode;
