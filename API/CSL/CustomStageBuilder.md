---
name: CustomStageBuilder
inherits: Reference

properties:
  - name: materials
    type: int
    default: 0
    description: Index counter for stage materials. Is used for assigning indices to every material, which is crucial for searching for stage materials.
  - name: data
    type: Dictionary
    description:
      - "Data holder for all stage metadata. Typically contains the stage name and the materials it holds."
      - "This object is modified every time a material is added by other functions, and eventually gives its data **directly** to the {{{CSL}}} node for use in selecting and loading your custom stage."
      - ""
      - "```gdscript"
      - "data = {"
      - '  "stage_name": "New Stage",'
      - '  "stage_icon": null,'
      - '  "materials": [],'
      - "};"
      - "```"

methods:
  - name: make_background
    returns: Dictionary
    args:
      - name: params
        type: Dictionary
        default: '{}'
    description: |
        This function adds a StageBackground to the metadata variable [data](#data), with the name `background_name`.
        Additional properties can be overridden using the `params` dictionary. See [StageBackground](API/StageBackground.md?id=properties).

        Returns the metadata for the StageBackground that was added to the stage metadata.
  - name: make_layer
    returns: Dictionary
    args:
      - name: layer_name
        type: String
      - name: background_id
        type: int
        default: '-1'
      - name: params
        type: Dictionary
        default: '{}'
    description: |
      This function adds a StageLayer to the metadata variable [data](#data), as a child of the [StageBackground](API/StageBackground.md) object with the ID `background_id`. If `background_id` equals `-1`, the layer will be added as a child of the first StageBackground found in the stage metadata.

      Additional properties can be overridden using the `params` dictionary. See [StageLayer](API/StageLayer.md?id=properties).

      Returns the metadata for the StageLayer that was added to the stage metadata.
  - name: make_element
    returns: Dictionary
    args:
      - name: element_name
        type: String
      - name: background_id
        type: int
        default: '-1'
      - name: params
        type: Dictionary
        default: '{}'
    description: |
      Similarly to [make_layer](#make_layer), this function adds a StageElement to the metadata variable [data](#data), as a child of the [StageLayer](API/StageLayer.md) object with the ID `layer_id`. If `layer_id` equals `-1`, the element will be added as a child of the first StageLayer found in the stage metadata.

      Additional properties can be overridden using the `params` dictionary. See [StageElement](API/StageElement.md?id=properties).

      Returns the metadata for the StageElement that was added to the stage metadata.
  - name: make_metadata
    returns: Dictionary
    args:
      - name: obj_name
        type: String
      - name: params
        type: Dictionary
    description: |
      This function builds the base metadata for an object given the object's name (`obj_name`) and extra parameters.
      The metadata is automatically assigned a `_id` key with the value of the [materials](#materials) property, and the [materials](#materials) property is incremented by 1 right after.

      Default material metadata typically contains a `type` (assigned `null` by default) and an empty `children` array as keys.

      The extra parameters are *required*, but you can leave it empty and it'll work just fine.
      This will likely be changed later on, as tossing through an empty dictionary is not optimal.

      Returns the generated metadata.
  - name: add_asset
    returns: Dictionary
    args:
      - name: material_name
        type: String
      - name: asset_path
        type: String
      - name: parent_id
        type: int
        default: '-1'
      - name: params
        type: Dictionary
        default: '{}'
    description: |
      This function allows for the importing of Godot scenes into the stage. 
      Assets can range from a simple sprite to a piece of UI.

      The asset will be added to the stage's metadata as a child of the material with the id `parent_id`. If the `parent_id` specified equals `-1`, the asset will be added at the end of the [data.materials](#data) array.

      Returns the generated metadata.
  - name: add_child_material
    returns: Dictionary
    args:
      - name: parent_id
        type: int
      - name: obj_data
        type: Dictionary
      - name: root
        type: Variant
        default: '-1'
    description: |
      Adds a material as a child of the material with the id `parent_id`, recursively. `root` is used as the recursive base of the function.

      Returns the metadata that was added as a child.
  - name: add_material
    returns: Dictionary
    args:
      - name: obj_data
        type: Dictionary
      - name: root
        type: Variant
        default: '-1'
    description: |
      Adds a material to the Array passed in through `root`. If `root` equals -1, the material is added at the end of the [data.materials](#data) array.

      Returns the metadata that was added.
  - name: get_material_id
    returns: int
    args:
      - name: material_name
        type: String
      - name: root
        type: Variant
        default: '-1'
    description: |
      Gets the id of the material with the name `material_name`, recursively. If `root` equals -1, the [data.materials](#data) array is the root.

      Returns the id of the material, or -1 if wasn't found in `root`.
  - name: get_material_data_from_id
    returns: Dictionary
    args:
      - name: id
        type: int
      - name: root
        type: Variant
        default: '-1'
    description: |
      Gets the metadata of the material with the `id` provided, recursively. If `root` equals -1, the [data.materials](#data) array is the root.

      Returns the metadata of the material, or -1 if there wasn't a material found with the `id` provided.
  - name: get_materials_of_type
    returns: "Dictionary[]"
    args:
      - name: query
        type: String
      - name: array
        type: Variant
        default: '-1'
    description: |
      Gets the metadata of all materials of type `query`, recursively. If `array` equals -1, the [data.materials](#data) array is used as the root.

      Returns an array containing all pieces of metadata with the `type` key set to `query`.
---

{{{renderName}}}

{{{renderInherits}}}

{{{renderInheritedBy}}}

This is the class used for building stage metadata.

[](../../notice.md ':include')

## Description

This class is used as a holder and a builder for stage data. When putting together your stage, this is what pulls it together and gives
the metadata that is then processed by the {{{CSL}}} node. See [CustomStageLoader](API/CSL/CustomStageLoader)

If you're looking to build a stage for the first time, the best place to start is at the [Getting started](beginners.md) page.
There's a full guide on how to build and share your first stage using the Custom Stage Loader mod.

## Properties

{{{renderPropertyTable}}}
## Methods

{{{renderMethodTable}}}
## Property Descriptions

{{{renderPropertyDescriptions}}}
## Method Descriptions

{{{renderMethodDescriptions}}}
