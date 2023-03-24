---
name: TilingAnimatedSprite
inherits: Node2D

signals:
  - name: frame_changed
    description: Emitted when the sprite's [frame](#frame) changes.

properties:
  - name: texture
    type: "StreamTexture"
    default: "null"
    description: Holds the current visible texture, which is recieved from this object's [`frames`](#frames).

  - name: frames
    type: "SpriteFrames"
    description: Handles spritesheet splitting and animations. The StreamTexture held in [`texture`](#texture) is grabbed from this instance.

  - name: animation
    type: "String"
    default: "default"
    setter: set_animation(value)
    getter: get_animation()
    description: Contains the name of the current selected animation.

  - name: frame
    type: "int"
    default: 0
    setter: set_frame(value)
    description: Contains the index of the current animation frame.

  - name: centered
    type: "bool"
    default: "true"
    setter: set_centered(value)
    getter: is_centered()
    description: Determines whether or not the sprite's texture is centered.

  - name: offset
    type: "Vector2"
    default: "Vector2.ZERO"
    setter: set_offset(value)
    getter: get_offset()
    description: Determines how offset the sprite is from its anchor point. Anchor point is determined by [`centered`](#centered).

  - name: h_tile
    type: "bool"
    default: "false"
    setter: set_h_tile(value)
    description: Determines whether or not the sprite will tile on the horizontal axis.

  - name: v_tile
    type: "bool"
    default: "false"
    setter: set_v_tile(value)
    description: Determines whether or not the sprite will tile on the vertical axis.

  - name: camera
    type: "Camera2D"
    default: "null"
    description: Holds a reference to the game's main camera.

  - name: anim_frame_count
    type: "int"
    default: 0
    description: The amount of frames the current animation has.

methods:
  - name: _update_anim_data
    description: |
        This function updates [`anim_frame_count`](#anim_frame_count) to match the current animation.
---

{{{renderName}}}

{{{renderInherits}}}

{{{renderInheritedBy}}}

This class is used to tile animated sprites.

[](../../notice.md ':include')

## Description

This class handles sprite animation and sprite tiling, to act as a workaround regarding Godot's parallax layering system.

## Properties

{{{renderPropertyTable}}}
## Methods

{{{renderMethodTable}}}

## Signals

{{{renderSignals}}}
## Property Descriptions

{{{renderPropertyDescriptions}}}
## Method Descriptions

{{{renderMethodDescriptions}}}
