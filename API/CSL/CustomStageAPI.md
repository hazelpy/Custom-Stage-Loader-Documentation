---
name: CustomStageAPI
inherits: Node

properties:
  - name: root_binds
    type: "Dictionary[]"
    description: Contains information for all stage element root hooks. See [*Root hooks*](root_hooks.md)
	
methods:
  - name: load_object
    args:
      - name: obj_data
        type: Dictionary
      - name: stage_root
        type: Variant
        default: "null"
    description: |
      Takes in stage material metadata and returns an instance of the material specified. The resulting instance is bound to the root hooks specified in [`root_binds`](#root_binds).
    returns: Object
---

{{{renderName}}}

{{{renderInherits}}}

{{{renderInheritedBy}}}

This class is used to convert stage material metadata into instances.

[](../../notice.md ':include')

## Description

This class converts stage material metadata into instances, and makes sure they hook up to the necessary root hooks.

## Properties

{{{renderPropertyTable}}}
## Methods

{{{renderMethodTable}}}
## Property Descriptions

{{{renderPropertyDescriptions}}}
## Method Descriptions

{{{renderMethodDescriptions}}}
