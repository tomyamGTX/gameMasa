gdjs.Q2Code = {};
gdjs.Q2Code.GDbgObjects1= [];
gdjs.Q2Code.GDbgObjects2= [];
gdjs.Q2Code.GDb1Objects1= [];
gdjs.Q2Code.GDb1Objects2= [];
gdjs.Q2Code.GDb2Objects1= [];
gdjs.Q2Code.GDb2Objects2= [];
gdjs.Q2Code.GDb3Objects1= [];
gdjs.Q2Code.GDb3Objects2= [];
gdjs.Q2Code.GDb4Objects1= [];
gdjs.Q2Code.GDb4Objects2= [];
gdjs.Q2Code.GDAimanObjects1= [];
gdjs.Q2Code.GDAimanObjects2= [];
gdjs.Q2Code.GDQObjects1= [];
gdjs.Q2Code.GDQObjects2= [];
gdjs.Q2Code.GDlogoObjects1= [];
gdjs.Q2Code.GDlogoObjects2= [];
gdjs.Q2Code.GDNewTextObjects1= [];
gdjs.Q2Code.GDNewTextObjects2= [];
gdjs.Q2Code.GDNewText2Objects1= [];
gdjs.Q2Code.GDNewText2Objects2= [];
gdjs.Q2Code.GDNewText3Objects1= [];
gdjs.Q2Code.GDNewText3Objects2= [];
gdjs.Q2Code.GDNewText4Objects1= [];
gdjs.Q2Code.GDNewText4Objects2= [];
gdjs.Q2Code.GDMinObjects1= [];
gdjs.Q2Code.GDMinObjects2= [];
gdjs.Q2Code.GDJamObjects1= [];
gdjs.Q2Code.GDJamObjects2= [];
gdjs.Q2Code.GDbubbleObjects1= [];
gdjs.Q2Code.GDbubbleObjects2= [];
gdjs.Q2Code.GDNewText5Objects1= [];
gdjs.Q2Code.GDNewText5Objects2= [];


gdjs.Q2Code.mapOfGDgdjs_9546Q2Code_9546GDNewTextObjects1Objects = Hashtable.newFrom({"NewText": gdjs.Q2Code.GDNewTextObjects1});
gdjs.Q2Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9744700);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Asset\\Click_Sound_Effect_HD__Uzj3CD0FUhA_140.mp3", false, 100, 1);
}}

}


};gdjs.Q2Code.mapOfGDgdjs_9546Q2Code_9546GDNewText2Objects1Objects = Hashtable.newFrom({"NewText2": gdjs.Q2Code.GDNewText2Objects1});
gdjs.Q2Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9746148);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Asset\\Click_Sound_Effect_HD__Uzj3CD0FUhA_140.mp3", false, 100, 1);
}}

}


};gdjs.Q2Code.mapOfGDgdjs_9546Q2Code_9546GDNewText3Objects1Objects = Hashtable.newFrom({"NewText3": gdjs.Q2Code.GDNewText3Objects1});
gdjs.Q2Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9747564);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Asset\\Click_Sound_Effect_HD__Uzj3CD0FUhA_140.mp3", false, 100, 1);
}}

}


};gdjs.Q2Code.mapOfGDgdjs_9546Q2Code_9546GDNewText4Objects1Objects = Hashtable.newFrom({"NewText4": gdjs.Q2Code.GDNewText4Objects1});
gdjs.Q2Code.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9749012);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Asset\\Click_Sound_Effect_HD__Uzj3CD0FUhA_140.mp3", false, 100, 1);
}}

}


};gdjs.Q2Code.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Asset\\Quiz_Background_Music_1_No_Copyright__-AvLz4_Qc4g_140.mp3", 1, true, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Q2Code.GDNewTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Q2Code.mapOfGDgdjs_9546Q2Code_9546GDNewTextObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Retry");
}
{ //Subevents
gdjs.Q2Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.Q2Code.GDNewText2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Q2Code.mapOfGDgdjs_9546Q2Code_9546GDNewText2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Retry");
}
{ //Subevents
gdjs.Q2Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs.Q2Code.GDNewText3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Q2Code.mapOfGDgdjs_9546Q2Code_9546GDNewText3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Main3");
}
{ //Subevents
gdjs.Q2Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText4"), gdjs.Q2Code.GDNewText4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Q2Code.mapOfGDgdjs_9546Q2Code_9546GDNewText4Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Retry");
}
{ //Subevents
gdjs.Q2Code.eventsList3(runtimeScene);} //End of subevents
}

}


};

gdjs.Q2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Q2Code.GDbgObjects1.length = 0;
gdjs.Q2Code.GDbgObjects2.length = 0;
gdjs.Q2Code.GDb1Objects1.length = 0;
gdjs.Q2Code.GDb1Objects2.length = 0;
gdjs.Q2Code.GDb2Objects1.length = 0;
gdjs.Q2Code.GDb2Objects2.length = 0;
gdjs.Q2Code.GDb3Objects1.length = 0;
gdjs.Q2Code.GDb3Objects2.length = 0;
gdjs.Q2Code.GDb4Objects1.length = 0;
gdjs.Q2Code.GDb4Objects2.length = 0;
gdjs.Q2Code.GDAimanObjects1.length = 0;
gdjs.Q2Code.GDAimanObjects2.length = 0;
gdjs.Q2Code.GDQObjects1.length = 0;
gdjs.Q2Code.GDQObjects2.length = 0;
gdjs.Q2Code.GDlogoObjects1.length = 0;
gdjs.Q2Code.GDlogoObjects2.length = 0;
gdjs.Q2Code.GDNewTextObjects1.length = 0;
gdjs.Q2Code.GDNewTextObjects2.length = 0;
gdjs.Q2Code.GDNewText2Objects1.length = 0;
gdjs.Q2Code.GDNewText2Objects2.length = 0;
gdjs.Q2Code.GDNewText3Objects1.length = 0;
gdjs.Q2Code.GDNewText3Objects2.length = 0;
gdjs.Q2Code.GDNewText4Objects1.length = 0;
gdjs.Q2Code.GDNewText4Objects2.length = 0;
gdjs.Q2Code.GDMinObjects1.length = 0;
gdjs.Q2Code.GDMinObjects2.length = 0;
gdjs.Q2Code.GDJamObjects1.length = 0;
gdjs.Q2Code.GDJamObjects2.length = 0;
gdjs.Q2Code.GDbubbleObjects1.length = 0;
gdjs.Q2Code.GDbubbleObjects2.length = 0;
gdjs.Q2Code.GDNewText5Objects1.length = 0;
gdjs.Q2Code.GDNewText5Objects2.length = 0;

gdjs.Q2Code.eventsList4(runtimeScene);

return;

}

gdjs['Q2Code'] = gdjs.Q2Code;
