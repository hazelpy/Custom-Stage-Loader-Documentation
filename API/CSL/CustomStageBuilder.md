# CustomStageBuilder

**Inherits:** Reference

This is the class used for building stage metadata.

?>This page is still under construction. If you have any concerns, please contact us so we can update this page!
You can find us in our [discord server](https://discord.gg/keTcqpUQVG).

## Description

This class is used as a holder and a builder for stage data. When putting together your stage, this is what pulls it together and gives
the metadata that is then processed by the <b><span style="color: rgb(155, 255, 155)">@CSL</span></b> node. See [CustomStageLoader](API/CSL/CustomStageLoader)

If you're looking to build a stage for the first time, the best place to start is at the [Getting started](beginners.md) page.
There's a full guide on how to build and share your first stage using the Custom Stage Loader mod.

## Properties

| Type | Name | Default Value |
| ----- | ------ | -------------- |
| int | [materials](#materials) | `0` |
| Dictionary | [data](#data) | |

## Methods

| Return Type | Name |
| ------------- | ------ |
| Dictionary | [make_background](#make_background)(String background_name, Dictionary params = {}) |
| Dictionary | [make_layer](#make_layer)(String layer_name, int background_id = -1, Dictionary params = {}) |
| Dictionary | [make_element](#make_element)(String element_name, int layer_id = -1, Dictionary params = {}) |
| Dictionary | [make_metadata](#make_metadata)(String obj_name, Dictionary params) |
| Dictionary | [add_asset](#add_asset)(String material_name, String asset_path, int parent_id = -1, Dictionary params = {}) |
| Dictionary | [add_child_material](#add_child_material)(int parent_id, Dictionary obj_data, root = -1) |
| Dictionary | [add_material](#add_material)(Dictionary obj_data, root = -1) |
| int | [get_material_id](#get_material_id)(String material_name, root = -1) |
| Dictionary | [get_material_data_from_id](#get_material_data_from_id)(int id, root = -1) |
| Dictionary[] | [get_materials_of_type](#get_materials_of_type)(String query, array = -1) |

## Property Descriptions

<a id="materials"></a>
### int `materials` = `0`

Index counter for stage materials. Is used for assigning indices to every material, which is crucial for searching for stage materials.

----

<a id="data"></a>
### Dictionary `data`

Data holder for all stage metadata. Typically contains the stage name and the materials it holds.
This object is modified every time a material is added by other functions, and eventually gives its data **directly** to the 
<b><span style="color: rgb(155, 255, 155)">@CSL</span></b> node for use in selecting and loading your custom stage.

```gdscript
data = {
	"stage_name": "New Stage",
	"materials": []
};
```

----

## Method Descriptions

<a id="make_background"></a>
<h3 style="font-weight: normal !important"> 
	<b>Dictionary</b> make_background( String background_name, Dictionary params = {} ) 
</h3>

This function adds a StageBackground to the metadata variable [`data`](#data), with the name `background_name`.
Additional properties can be overridden using the `params` dictionary. See [StageBackground](API/StageBackground.md?id=properties)

Returns the metadata for the StageBackground that was added to the stage metadata.

----

<a id="make_layer"></a>
<h3 style="font-weight: normal !important">
	<b>Dictionary</b> make_layer( String layer_name, int background_id = -1, Dictionary params = {} )
</h3>

This function adds a StageLayer to the metadata variable [`data`](#data), 
as a child of the [StageBackground](API/StageBackground.md) object with the ID `background_id`. If `background_id` equals `-1`, the layer
will be added as a child of the first StageBackground found in the stage metadata.

Additional properties can be overridden using the `params` dictionary. See [StageLayer](API/StageLayer.md?id=properties)

Returns the metadata for the StageLayer that was added to the stage metadata.

----

<a id="make_element"></a>
<h3 style="font-weight: normal !important">
	<b>Dictionary</b> make_element( String element_name, int layer_id = -1, Dictionary params = {} )
</h3>

Similarly to [make_layer]()#make_layer(), this function adds a StageElement to the metadata variable [`data`](#data), 
as a child of the [StageLayer](API/StageLayer.md) object with the ID `layer_id`. If `layer_id` equals `-1`, the element
will be added as a child of the first StageLayer found in the stage metadata.

Additional properties can be overridden using the `params` dictionary. See [StageElement](API/StageElement.md?id=properties)

Returns the metadata for the StageElement that was added to the stage metadata.

----

<a id="make_metadata"></a>
<h3 style="font-weight: normal !important">
	<b>Dictionary</b> make_metadata( String obj_name, Dictionary params )
</h3>

This function builds the base metadata for an object given the object's name (`obj_name`) and extra parameters.
The metadata is automatically assigned a `_id` key with the value of the [`materials`](#materials) property, 
and the [`materials`](#materials) property is incremented by 1 right after.

Default material metadata typically contains a `type` (assigned `null` by default) and an empty `children` array as keys.

The extra parameters are *required*, but you can leave it empty and it'll work just fine.
This will likely be changed later on, as tossing through an empty dictionary is not optimal.

Returns the generated metadata.

----

<a id="add_asset"></a>
<h3 style="font-weight: normal !important">
	<b>Dictionary</b> add_asset( String material_name, String asset_path, int parent_id = -1, Dictionary params = {} )
</h3>

This function allows for the importing of Godot scenes into the stage. 
Assets can range from a simple sprite to a piece of UI.

The asset will be added to the stage's metadata as a child of the material with the id `parent_id`. If the `parent_id`
specified equals `-1`, the asset will be added at the end of the [`data.materials`](#data) array.

Returns the generated metadata.

----

<a id="add_child_material"></a>
<h3 style="font-weight: normal !important">
	<b>Dictionary</b> add_child_material( int parent_id, Dictionary obj_data, root = -1 )
</h3>

Adds a material as a child of the material with the id `parent_id`, recursively. `root` is used as the recursive base
of the function.

Returns the metadata that was added as a child.

----

<a id="add_material"></a>
<h3 style="font-weight: normal !important">
	<b>Dictionary</b> add_material( Dictionary obj_data, root = -1 )
</h3>

Adds a material to the Array passed in through `root`. If `root` equals -1, the material is added at the end of the
[`data.materials`](#data) array.

Returns the metadata that was added.

----

<a id="get_material_id"></a>
<h3 style="font-weight: normal !important">
	<b>int</b> get_material_id( String material_name, root = -1 )
</h3>

Gets the id of the material with the name `material_name`, recursively. If `root` equals -1, 
the [`data.materials`](#data) array is the root.

Returns the id of the material, or -1 if wasn't found in `root`.

----

<a id="get_material_data_from_id"></a>
<h3 style="font-weight: normal !important">
	<b>Dictionary</b> get_material_data_from_id( int id, root = -1 )
</h3>

Gets the metadata of the material with the `id` provided, recursively. If `root` equals -1, 
the [`data.materials`](#data) array is the root.

Returns the metadata of the material, or -1 if there wasn't a material found with the `id` provided.

----

<a id="get_materials_of_type"></a>
<h3 style="font-weight: normal !important">
	<b>Dictionary</b> get_materials_of_type( String query, array = -1 )
</h3>

Gets the metadata of all materials of type `query`, recursively. If `array` equals -1, 
the [`data.materials`](#data) array is used as the root.

Returns an array containing all pieces of metadata with the `type` key set to `query`.

----
