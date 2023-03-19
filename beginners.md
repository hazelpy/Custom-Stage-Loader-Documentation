# Getting Started

Although it may look intimidating, making stages using the Custom Stage Loader is not too challenging.
This page will give you the rundown on how to make *your* first stage and package it for everyone else to use.

[](./notice.md ':include')

## Preparing Your ModMain.gd

In order to build and load a stage using the Custom Stage Loader, you'll need a base template, which we've provided below.
This block of code below contains everything you'll need to have in your `ModMain.gd` file *before* you start building your stage.

```gdscript
extends Node

# Loads the CustomStageBuilder class, for use in metadata building
onready var CustomStageBuilder = load("res://custom_stage_loader/CustomStageBuilder.gd");

var Builder;
var Loader;

func _ready():
	# We call the build_stage() function after the game's process queue clears up
	# This is to ensure no errors occur.
	call_deferred("build_stage");

# Here is where the stage building takes place.
func build_stage():
	Builder = CustomStageBuilder.new(); # For building the stage metadata
	Loader = get_tree().get_root().get_node("CSL"); # For loading the stage itself
	
	pass;
```
 
## Stage Building

Now, we'll begin building your stage! Make sure you're working inside of Godot, since we'll be needing some SpriteFrames instances.

In this example, we'll be adding a scrolling ground layer and parallax sky layer. 
To start, we'll have to make a `StageBackground` using our stage builder. To do so, simply move on down to your `build_stage()` function.
We'll be adding a call to the builder's `make_background()` function. See [CustomStageBuilder](API/CSL/CustomStageBuilder.md?id=make_background)

```gdscript
# ...

# Here is where the stage building takes place.
func build_stage():
	Builder = CustomStageBuilder.new(); # For building the stage metadata
	Loader = get_tree().get_root().get_node("CSL"); # For loading the stage itself
	
	Builder.make_background("MainBackground"); # Creating a background to hold our layers
	
	pass;
```

?>`StageBackground`s, when noted from the `CustomStageBuilder` class, are typically only built to hold `StageLayer` instances.
This doesn't mean that you can't add other types of objects using the builder's `add_asset()` function. See [UNFINISHED]()

To make a scrolling ground, we first need to create a `StageLayer`.
For this we can use `make_layer()`, passing the name parameter and calling `get_material_id()` so we can determine the parent `StageBackground` of this layer,
in our case, this will be `MainBackground`

```gdscript
	# ...

	Builder.make_background("MainBackground"); # Creating a background to hold our layers
	
	Builder.make_layer("GroundLayer", Builder.get_material_id("MainBackground")) # Creating the ground layer, making it a child of MainBackground

	pass;
```

?>`StageLayer`s can also have one more additional parameter `data`, in which we can modify the behaviors of the Layer,
 such as its position, scale, motion_mirroring, etc. See [UNFINISHED]()

 For adding the visual part of our scrolling ground, or in other words, the `StageElement`, we will need to create a new `SpriteFrames` resource.
 Name it as you wish, but for convenience's sake, we'll name ours the same as the sprite.

>![alt text](./media/1.png "Creating a SpriteFrames Resource")