gdjs.Q1Code = {};
gdjs.Q1Code.GDbgObjects1= [];
gdjs.Q1Code.GDbgObjects2= [];
gdjs.Q1Code.GDAnalogObjects1= [];
gdjs.Q1Code.GDAnalogObjects2= [];
gdjs.Q1Code.GDLogoObjects1= [];
gdjs.Q1Code.GDLogoObjects2= [];
gdjs.Q1Code.GDAimanObjects1= [];
gdjs.Q1Code.GDAimanObjects2= [];
gdjs.Q1Code.GDMinuteObjects1= [];
gdjs.Q1Code.GDMinuteObjects2= [];
gdjs.Q1Code.GDHourObjects1= [];
gdjs.Q1Code.GDHourObjects2= [];
gdjs.Q1Code.GDA1Objects1= [];
gdjs.Q1Code.GDA1Objects2= [];
gdjs.Q1Code.GDA2Objects1= [];
gdjs.Q1Code.GDA2Objects2= [];
gdjs.Q1Code.GDA3Objects1= [];
gdjs.Q1Code.GDA3Objects2= [];
gdjs.Q1Code.GDA4Objects1= [];
gdjs.Q1Code.GDA4Objects2= [];
gdjs.Q1Code.GDNewTextObjects1= [];
gdjs.Q1Code.GDNewTextObjects2= [];
gdjs.Q1Code.GDNewText2Objects1= [];
gdjs.Q1Code.GDNewText2Objects2= [];
gdjs.Q1Code.GDNewText3Objects1= [];
gdjs.Q1Code.GDNewText3Objects2= [];
gdjs.Q1Code.GDNewText4Objects1= [];
gdjs.Q1Code.GDNewText4Objects2= [];
gdjs.Q1Code.GDNewText5Objects1= [];
gdjs.Q1Code.GDNewText5Objects2= [];
gdjs.Q1Code.GDbubbleObjects1= [];
gdjs.Q1Code.GDbubbleObjects2= [];


gdjs.Q1Code.mapOfGDgdjs_9546Q1Code_9546GDNewTextObjects1Objects = Hashtable.newFrom({"NewText": gdjs.Q1Code.GDNewTextObjects1});
gdjs.Q1Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9718196);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Asset\\Click_Sound_Effect_HD__Uzj3CD0FUhA_140.mp3", false, 100, 1);
}}

}


};gdjs.Q1Code.mapOfGDgdjs_9546Q1Code_9546GDNewText2Objects1Objects = Hashtable.newFrom({"NewText2": gdjs.Q1Code.GDNewText2Objects1});
gdjs.Q1Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9719516);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Asset\\Click_Sound_Effect_HD__Uzj3CD0FUhA_140.mp3", false, 100, 1);
}}

}


};gdjs.Q1Code.mapOfGDgdjs_9546Q1Code_9546GDNewText3Objects1Objects = Hashtable.newFrom({"NewText3": gdjs.Q1Code.GDNewText3Objects1});
gdjs.Q1Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9721060);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Asset\\Click_Sound_Effect_HD__Uzj3CD0FUhA_140.mp3", false, 100, 1);
}}

}


};gdjs.Q1Code.mapOfGDgdjs_9546Q1Code_9546GDNewText4Objects1Objects = Hashtable.newFrom({"NewText4": gdjs.Q1Code.GDNewText4Objects1});
gdjs.Q1Code.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9722380);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Asset\\Click_Sound_Effect_HD__Uzj3CD0FUhA_140.mp3", false, 100, 1);
}}

}


};gdjs.Q1Code.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Asset\\Quiz_Background_Music_1_No_Copyright__-AvLz4_Qc4g_140.mp3", 1, true, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Q1Code.GDNewTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Q1Code.mapOfGDgdjs_9546Q1Code_9546GDNewTextObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Retry");
}
{ //Subevents
gdjs.Q1Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.Q1Code.GDNewText2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Q1Code.mapOfGDgdjs_9546Q1Code_9546GDNewText2Objects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Main2");
}
{ //Subevents
gdjs.Q1Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs.Q1Code.GDNewText3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Q1Code.mapOfGDgdjs_9546Q1Code_9546GDNewText3Objects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Retry");
}
{ //Subevents
gdjs.Q1Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText4"), gdjs.Q1Code.GDNewText4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Q1Code.mapOfGDgdjs_9546Q1Code_9546GDNewText4Objects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Retry");
}
{ //Subevents
gdjs.Q1Code.eventsList3(runtimeScene);} //End of subevents
}

}


};

gdjs.Q1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Q1Code.GDbgObjects1.length = 0;
gdjs.Q1Code.GDbgObjects2.length = 0;
gdjs.Q1Code.GDAnalogObjects1.length = 0;
gdjs.Q1Code.GDAnalogObjects2.length = 0;
gdjs.Q1Code.GDLogoObjects1.length = 0;
gdjs.Q1Code.GDLogoObjects2.length = 0;
gdjs.Q1Code.GDAimanObjects1.length = 0;
gdjs.Q1Code.GDAimanObjects2.length = 0;
gdjs.Q1Code.GDMinuteObjects1.length = 0;
gdjs.Q1Code.GDMinuteObjects2.length = 0;
gdjs.Q1Code.GDHourObjects1.length = 0;
gdjs.Q1Code.GDHourObjects2.length = 0;
gdjs.Q1Code.GDA1Objects1.length = 0;
gdjs.Q1Code.GDA1Objects2.length = 0;
gdjs.Q1Code.GDA2Objects1.length = 0;
gdjs.Q1Code.GDA2Objects2.length = 0;
gdjs.Q1Code.GDA3Objects1.length = 0;
gdjs.Q1Code.GDA3Objects2.length = 0;
gdjs.Q1Code.GDA4Objects1.length = 0;
gdjs.Q1Code.GDA4Objects2.length = 0;
gdjs.Q1Code.GDNewTextObjects1.length = 0;
gdjs.Q1Code.GDNewTextObjects2.length = 0;
gdjs.Q1Code.GDNewText2Objects1.length = 0;
gdjs.Q1Code.GDNewText2Objects2.length = 0;
gdjs.Q1Code.GDNewText3Objects1.length = 0;
gdjs.Q1Code.GDNewText3Objects2.length = 0;
gdjs.Q1Code.GDNewText4Objects1.length = 0;
gdjs.Q1Code.GDNewText4Objects2.length = 0;
gdjs.Q1Code.GDNewText5Objects1.length = 0;
gdjs.Q1Code.GDNewText5Objects2.length = 0;
gdjs.Q1Code.GDbubbleObjects1.length = 0;
gdjs.Q1Code.GDbubbleObjects2.length = 0;

gdjs.Q1Code.eventsList4(runtimeScene);

return;

}

gdjs['Q1Code'] = gdjs.Q1Code;
