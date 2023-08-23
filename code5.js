gdjs.Main3Code = {};
gdjs.Main3Code.GDMainObjects1= [];
gdjs.Main3Code.GDMainObjects2= [];
gdjs.Main3Code.GDAimanObjects1= [];
gdjs.Main3Code.GDAimanObjects2= [];
gdjs.Main3Code.GDNewTextObjects1= [];
gdjs.Main3Code.GDNewTextObjects2= [];
gdjs.Main3Code.GDbackObjects1= [];
gdjs.Main3Code.GDbackObjects2= [];
gdjs.Main3Code.GDNewText2Objects1= [];
gdjs.Main3Code.GDNewText2Objects2= [];


gdjs.Main3Code.mapOfGDgdjs_9546Main3Code_9546GDNewTextObjects1Objects = Hashtable.newFrom({"NewText": gdjs.Main3Code.GDNewTextObjects1});
gdjs.Main3Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9763396);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Asset\\Click_Sound_Effect_HD__Uzj3CD0FUhA_140.mp3", false, 100, 1);
}}

}


};gdjs.Main3Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Asset\\free-sound-effects-for-games-win-kids-game-sound-effect-h-5zhf7bvc-140_ki0a5ZvC.mp3", 1, false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Main3Code.GDNewTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main3Code.mapOfGDgdjs_9546Main3Code_9546GDNewTextObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Q3");
}
{ //Subevents
gdjs.Main3Code.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.Main3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main3Code.GDMainObjects1.length = 0;
gdjs.Main3Code.GDMainObjects2.length = 0;
gdjs.Main3Code.GDAimanObjects1.length = 0;
gdjs.Main3Code.GDAimanObjects2.length = 0;
gdjs.Main3Code.GDNewTextObjects1.length = 0;
gdjs.Main3Code.GDNewTextObjects2.length = 0;
gdjs.Main3Code.GDbackObjects1.length = 0;
gdjs.Main3Code.GDbackObjects2.length = 0;
gdjs.Main3Code.GDNewText2Objects1.length = 0;
gdjs.Main3Code.GDNewText2Objects2.length = 0;

gdjs.Main3Code.eventsList1(runtimeScene);

return;

}

gdjs['Main3Code'] = gdjs.Main3Code;
