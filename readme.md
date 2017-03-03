# Discogs Label Maker

#### About

`discogs-label-maker` will convert your personal notes for releases in your collection into `2 1/8" x 4"` printable labels for the Dymo Labelwriter 450/Turbo printer.

<img src="https://github.com/salcido/discogs-label-maker/blob/master/example.png" alt="Example label" style="width: 200px;"/>

Click the `Preview label` button when viewing a release in your collection. You'll be prompted with a list of styles automatically generated from exsiting markup. Either accept them by pressing 'OK' or edit them to your liking. A preview of your label will be rendered into the DOM.

If you are happy with the label, click it and it will be printed from your Dymo Labelwriter printer. If not, make any changes you want and press `Preview label` again. An updated label will be rendered into the DOM.

#### Installation

* `git clone https://github.com/salcido/discogs-label-maker.git` (this repository)
* Ensure 'Developer mode' is checked in Chrome and click 'Load unpacked extension...' then select the `discogs-label-maker` root folder.

#### Customization

The `xml` template is formatted to fit a `2 1/8" x 4"` sized label. You can either tweak positioning by changing the `Bounds` fields in each `TextObject` or create your own template from scratch. You'll need to update the `Name` values of each `TextObject` to match what's in `label.setObjectText` methods in `inject.js` so the extension knows which fields to populate with the corresponding information.
