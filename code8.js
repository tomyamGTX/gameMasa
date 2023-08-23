gdjs.Q4Code = {};
gdjs.Q4Code.GDbgObjects1= [];
gdjs.Q4Code.GDbgObjects2= [];
gdjs.Q4Code.GDQObjects1= [];
gdjs.Q4Code.GDQObjects2= [];
gdjs.Q4Code.GDA1Objects1= [];
gdjs.Q4Code.GDA1Objects2= [];
gdjs.Q4Code.GDMInObjects1= [];
gdjs.Q4Code.GDMInObjects2= [];
gdjs.Q4Code.GDJamObjects1= [];
gdjs.Q4Code.GDJamObjects2= [];
gdjs.Q4Code.GDA2Objects1= [];
gdjs.Q4Code.GDA2Objects2= [];
gdjs.Q4Code.GDAimanObjects1= [];
gdjs.Q4Code.GDAimanObjects2= [];
gdjs.Q4Code.GDLogoObjects1= [];
gdjs.Q4Code.GDLogoObjects2= [];
gdjs.Q4Code.GDNewTextObjects1= [];
gdjs.Q4Code.GDNewTextObjects2= [];
gdjs.Q4Code.GDNewText2Objects1= [];
gdjs.Q4Code.GDNewText2Objects2= [];
gdjs.Q4Code.GDNewText3Objects1= [];
gdjs.Q4Code.GDNewText3Objects2= [];


gdjs.Q4Code.mapOfGDgdjs_9546Q4Code_9546GDA1Objects1Objects = Hashtable.newFrom({"A1": gdjs.Q4Code.GDA1Objects1});
gdjs.Q4Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9796932);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Asset\\Click_Sound_Effect_HD__Uzj3CD0FUhA_140.mp3", false, 100, 1);
}}

}


};gdjs.Q4Code.mapOfGDgdjs_9546Q4Code_9546GDNewText2Objects1Objects = Hashtable.newFrom({"NewText2": gdjs.Q4Code.GDNewText2Objects1});
gdjs.Q4Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9798252);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Asset\\Click_Sound_Effect_HD__Uzj3CD0FUhA_140.mp3", false, 100, 1);
}}

}


};gdjs.Q4Code.mapOfGDgdjs_9546Q4Code_9546GDNewText3Objects1Objects = Hashtable.newFrom({"NewText3": gdjs.Q4Code.GDNewText3Objects1});
gdjs.Q4Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9799796);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Asset\\Click_Sound_Effect_HD__Uzj3CD0FUhA_140.mp3", false, 100, 1);
}}

}


};gdjs.Q4Code.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Asset\\Quiz_Background_Music_1_No_Copyright__-AvLz4_Qc4g_140.mp3", 1, true, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("A1"), gdjs.Q4Code.GDA1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Q4Code.mapOfGDgdjs_9546Q4Code_9546GDA1Objects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Main");
}
{ //Subevents
gdjs.Q4Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.Q4Code.GDNewText2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Q4Code.mapOfGDgdjs_9546Q4Code_9546GDNewText2Objects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Retry");
}
{ //Subevents
gdjs.Q4Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs.Q4Code.GDNewText3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Q4Code.mapOfGDgdjs_9546Q4Code_9546GDNewText3Objects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Retry");
}
{ //Subevents
gdjs.Q4Code.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.Q4Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Q4Code.GDbgObjects1.length = 0;
gdjs.Q4Code.GDbgObjects2.length = 0;
gdjs.Q4Code.GDQObjects1.length = 0;
gdjs.Q4Code.GDQObjects2.length = 0;
gdjs.Q4Code.GDA1Objects1.length = 0;
gdjs.Q4Code.GDA1Objects2.length = 0;
gdjs.Q4Code.GDMInObjects1.length = 0;
gdjs.Q4Code.GDMInObjects2.length = 0;
gdjs.Q4Code.GDJamObjects1.length = 0;
gdjs.Q4Code.GDJamObjects2.length = 0;
gdjs.Q4Code.GDA2Objects1.length = 0;
gdjs.Q4Code.GDA2Objects2.length = 0;
gdjs.Q4Code.GDAimanObjects1.length = 0;
gdjs.Q4Code.GDAimanObjects2.length = 0;
gdjs.Q4Code.GDLogoObjects1.length = 0;
gdjs.Q4Code.GDLogoObjects2.length = 0;
gdjs.Q4Code.GDNewTextObjects1.length = 0;
gdjs.Q4Code.GDNewTextObjects2.length = 0;
gdjs.Q4Code.GDNewText2Objects1.length = 0;
gdjs.Q4Code.GDNewText2Objects2.length = 0;
gdjs.Q4Code.GDNewText3Objects1.length = 0;
gdjs.Q4Code.GDNewText3Objects2.length = 0;

gdjs.Q4Code.eventsList3(runtimeScene);

return;

}

gdjs['Q4Code'] = gdjs.Q4Code;
