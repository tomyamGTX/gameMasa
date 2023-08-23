gdjs.Q3Code = {};
gdjs.Q3Code.GDBgObjects1= [];
gdjs.Q3Code.GDBgObjects2= [];
gdjs.Q3Code.GDDigitalObjects1= [];
gdjs.Q3Code.GDDigitalObjects2= [];
gdjs.Q3Code.GDAimanObjects1= [];
gdjs.Q3Code.GDAimanObjects2= [];
gdjs.Q3Code.GDlogoObjects1= [];
gdjs.Q3Code.GDlogoObjects2= [];
gdjs.Q3Code.GDA1Objects1= [];
gdjs.Q3Code.GDA1Objects2= [];
gdjs.Q3Code.GDA2Objects1= [];
gdjs.Q3Code.GDA2Objects2= [];
gdjs.Q3Code.GDA3Objects1= [];
gdjs.Q3Code.GDA3Objects2= [];
gdjs.Q3Code.GDMinObjects1= [];
gdjs.Q3Code.GDMinObjects2= [];
gdjs.Q3Code.GDMin2Objects1= [];
gdjs.Q3Code.GDMin2Objects2= [];
gdjs.Q3Code.GDMin3Objects1= [];
gdjs.Q3Code.GDMin3Objects2= [];
gdjs.Q3Code.GDHourObjects1= [];
gdjs.Q3Code.GDHourObjects2= [];
gdjs.Q3Code.GDHour2Objects1= [];
gdjs.Q3Code.GDHour2Objects2= [];
gdjs.Q3Code.GDHour3Objects1= [];
gdjs.Q3Code.GDHour3Objects2= [];
gdjs.Q3Code.GDNewTextObjects1= [];
gdjs.Q3Code.GDNewTextObjects2= [];
gdjs.Q3Code.GDbubbleObjects1= [];
gdjs.Q3Code.GDbubbleObjects2= [];
gdjs.Q3Code.GDNewText2Objects1= [];
gdjs.Q3Code.GDNewText2Objects2= [];


gdjs.Q3Code.mapOfGDgdjs_9546Q3Code_9546GDA1Objects1Objects = Hashtable.newFrom({"A1": gdjs.Q3Code.GDA1Objects1});
gdjs.Q3Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9771340);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Asset\\Click_Sound_Effect_HD__Uzj3CD0FUhA_140.mp3", false, 100, 1);
}}

}


};gdjs.Q3Code.mapOfGDgdjs_9546Q3Code_9546GDA2Objects1Objects = Hashtable.newFrom({"A2": gdjs.Q3Code.GDA2Objects1});
gdjs.Q3Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9772660);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Asset\\Click_Sound_Effect_HD__Uzj3CD0FUhA_140.mp3", false, 100, 1);
}}

}


};gdjs.Q3Code.mapOfGDgdjs_9546Q3Code_9546GDA3Objects1Objects = Hashtable.newFrom({"A3": gdjs.Q3Code.GDA3Objects1});
gdjs.Q3Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9774204);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Asset\\Click_Sound_Effect_HD__Uzj3CD0FUhA_140.mp3", false, 100, 1);
}}

}


};gdjs.Q3Code.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Asset\\Quiz_Background_Music_1_No_Copyright__-AvLz4_Qc4g_140.mp3", 1, true, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("A1"), gdjs.Q3Code.GDA1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Q3Code.mapOfGDgdjs_9546Q3Code_9546GDA1Objects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Retry");
}
{ //Subevents
gdjs.Q3Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("A2"), gdjs.Q3Code.GDA2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Q3Code.mapOfGDgdjs_9546Q3Code_9546GDA2Objects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Retry");
}
{ //Subevents
gdjs.Q3Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("A3"), gdjs.Q3Code.GDA3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Q3Code.mapOfGDgdjs_9546Q3Code_9546GDA3Objects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Main4");
}
{ //Subevents
gdjs.Q3Code.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.Q3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Q3Code.GDBgObjects1.length = 0;
gdjs.Q3Code.GDBgObjects2.length = 0;
gdjs.Q3Code.GDDigitalObjects1.length = 0;
gdjs.Q3Code.GDDigitalObjects2.length = 0;
gdjs.Q3Code.GDAimanObjects1.length = 0;
gdjs.Q3Code.GDAimanObjects2.length = 0;
gdjs.Q3Code.GDlogoObjects1.length = 0;
gdjs.Q3Code.GDlogoObjects2.length = 0;
gdjs.Q3Code.GDA1Objects1.length = 0;
gdjs.Q3Code.GDA1Objects2.length = 0;
gdjs.Q3Code.GDA2Objects1.length = 0;
gdjs.Q3Code.GDA2Objects2.length = 0;
gdjs.Q3Code.GDA3Objects1.length = 0;
gdjs.Q3Code.GDA3Objects2.length = 0;
gdjs.Q3Code.GDMinObjects1.length = 0;
gdjs.Q3Code.GDMinObjects2.length = 0;
gdjs.Q3Code.GDMin2Objects1.length = 0;
gdjs.Q3Code.GDMin2Objects2.length = 0;
gdjs.Q3Code.GDMin3Objects1.length = 0;
gdjs.Q3Code.GDMin3Objects2.length = 0;
gdjs.Q3Code.GDHourObjects1.length = 0;
gdjs.Q3Code.GDHourObjects2.length = 0;
gdjs.Q3Code.GDHour2Objects1.length = 0;
gdjs.Q3Code.GDHour2Objects2.length = 0;
gdjs.Q3Code.GDHour3Objects1.length = 0;
gdjs.Q3Code.GDHour3Objects2.length = 0;
gdjs.Q3Code.GDNewTextObjects1.length = 0;
gdjs.Q3Code.GDNewTextObjects2.length = 0;
gdjs.Q3Code.GDbubbleObjects1.length = 0;
gdjs.Q3Code.GDbubbleObjects2.length = 0;
gdjs.Q3Code.GDNewText2Objects1.length = 0;
gdjs.Q3Code.GDNewText2Objects2.length = 0;

gdjs.Q3Code.eventsList3(runtimeScene);

return;

}

gdjs['Q3Code'] = gdjs.Q3Code;
