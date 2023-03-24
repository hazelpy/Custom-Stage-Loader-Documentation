# Root hooks

Stages automatically attach specific signals and values to every stage element that wants it. This functionality can be utilized within custom assets to easily allow more dynamic implementations.

[](notice.md ':include')

Stages made with this mod always have a [StageCanvas](API/StageCanvas) as their root node by default. 
Because of this, we're capable of adding special features to our stages that otherwise would've been an annoyance.
The main feature in question here is the *stage root hooks*.

Stage root hooks are signals that automatically bind between the stage root and every stage material that wants it.

For example, say we want a custom asset to know when the game's tick changes. To do this, we simply add a `_on_tick_changed(value)` function to our asset's script as follows:

```gdscript
# This function will be called whenever the game's tick changes.
func _on_tick_changed(new_tick:int):
	print("Tick changed!");
	print("New tick: ", new_tick);
```

But getting the game's tick isn't the only thing an asset might want to do. Because of that, every material can have access to the `game` itself. Take a look at this code block:

```gdscript
# Initialize a holder for our game reference
var game; 

# stage_root is automatically populated with a reference to the stage's root StageCanvas on initialization
var stage_root; 

# This function will be called whenever a new game instance is made.
func _on_game_changed():
	if is_instance_valid(stage_root):
		game = stage_root.game; # Assigns the stage_root's game reference to our "game" variable
```

The CustomStageAPI's default `root_binds` are displayed below.

[](./API/CSL/root_binds.md ":include")

?> Note: When the CustomStageAPI object loads an object from metadata, all keys in the metadata are checked to see if they're properties within the object itself.
The `stage_root` is an assigned key within object metadata, so naming a variable `stage_root` in our object's script gives us a reference to the stage's root.