let digitalcol = "#2C97DF"
export default function define(Blocks: Blockly.BlockDefinitions) {

  Blocks['import_digitalio'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('from digitalio import *');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(digitalcol);
      this.setTooltip('Imports the DigitalIO library.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['pinconfig'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("pin"), "pin")
          .appendField(" = DigitalInOut(")
          .appendField(new Blockly.FieldTextInput(""), "pinno")
          .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(digitalcol);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['pindirection'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("pin"), "pin")
          .appendField(".direction = ")
          .appendField(new Blockly.FieldTextInput("Direction.OUTPUT"), "direction");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(digitalcol);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['pull'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("pin"), "pin")
          .appendField(".pull")
          .appendField(new Blockly.FieldTextInput("Pull.DOWN"), "direction");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(digitalcol);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['pinvalue'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("pin"), "pin")
          .appendField(".value = ")
          .appendField(new Blockly.FieldTextInput("True"), "text")
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(digitalcol);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['valuein'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("pin"), "pin")
          .appendField(".value");
      this.setOutput(true, null);
      this.setColour(digitalcol);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

}