gdjs.RetryCode = {};
gdjs.RetryCode.GDBgObjects1= [];
gdjs.RetryCode.GDBgObjects2= [];
gdjs.RetryCode.GDretryObjects1= [];
gdjs.RetryCode.GDretryObjects2= [];
gdjs.RetryCode.GDretry2Objects1= [];
gdjs.RetryCode.GDretry2Objects2= [];
gdjs.RetryCode.GDNewTextObjects1= [];
gdjs.RetryCode.GDNewTextObjects2= [];
gdjs.RetryCode.GDNewText2Objects1= [];
gdjs.RetryCode.GDNewText2Objects2= [];
gdjs.RetryCode.GDNewText3Objects1= [];
gdjs.RetryCode.GDNewText3Objects2= [];


gdjs.RetryCode.mapOfGDgdjs_9546RetryCode_9546GDNewTextObjects1Objects = Hashtable.newFrom({"NewText": gdjs.RetryCode.GDNewTextObjects1});
gdjs.RetryCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9819068);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Asset\\Click_Sound_Effect_HD__Uzj3CD0FUhA_140.mp3", false, 100, 1);
}}

}


};gdjs.RetryCode.mapOfGDgdjs_9546RetryCode_9546GDNewText3Objects1Objects = Hashtable.newFrom({"NewText3": gdjs.RetryCode.GDNewText3Objects1});
gdjs.RetryCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9820540);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Asset\\Click_Sound_Effect_HD__Uzj3CD0FUhA_140.mp3", false, 100, 1);
}}

}


};gdjs.RetryCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Asset\\fail-meme-sound-effect-gb0daipjpig-140_02tjHS8j.mp3", 1, false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.RetryCode.GDNewTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.RetryCode.mapOfGDgdjs_9546RetryCode_9546GDNewTextObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}
{ //Subevents
gdjs.RetryCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs.RetryCode.GDNewText3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.RetryCode.mapOfGDgdjs_9546RetryCode_9546GDNewText3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://youtu.be/xvFZjo5PgG0", runtimeScene);
}
{ //Subevents
gdjs.RetryCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.RetryCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.RetryCode.GDBgObjects1.length = 0;
gdjs.RetryCode.GDBgObjects2.length = 0;
gdjs.RetryCode.GDretryObjects1.length = 0;
gdjs.RetryCode.GDretryObjects2.length = 0;
gdjs.RetryCode.GDretry2Objects1.length = 0;
gdjs.RetryCode.GDretry2Objects2.length = 0;
gdjs.RetryCode.GDNewTextObjects1.length = 0;
gdjs.RetryCode.GDNewTextObjects2.length = 0;
gdjs.RetryCode.GDNewText2Objects1.length = 0;
gdjs.RetryCode.GDNewText2Objects2.length = 0;
gdjs.RetryCode.GDNewText3Objects1.length = 0;
gdjs.RetryCode.GDNewText3Objects2.length = 0;

gdjs.RetryCode.eventsList2(runtimeScene);

return;

}

gdjs['RetryCode'] = gdjs.RetryCode;
