# Discogs Label Maker

#### About

`discogs-label-maker` will convert your personal notes for releases in your collection into `2 1/8" x 4"` printable labels for the Dymo Labelwriter.

<img src="https://github.com/salcido/discogs-label-maker/blob/master/example.png" alt="Example label" style="width: 200px;"/>

Click the `Preview label` button. You'll be prompted with styles automatically generated from exsiting markup. Either accept them or edit them to your liking. A preview of your label will be rendered into the DOM.

If you are happy with the label, click it and it will be printed from your Dymo Labelwriter printer.

#### Installation

* `git clone https://github.com/salcido/discogs-label-maker.git` (this repository)
* Change the file path in the `attachPreviewListener` function to point to the `record-label-fields.xml` file on your local machine.
* Ensure 'Developer mode' is checked in Chrome and click 'Load unpacked extension...', and select the `discogs-label-maker` root folder.

#### Customization

This `xml` template is formatted to fit a `2 1/8" x 4"` sized label. You can either tweak positioning by changing the `Bounds` fields in each `TextObject` or create your own template from scratch. You'll need to update the `Name` values of each `TextObject` to match what's in `inject.js` so the extension knows which fields to populate with the corresponding information.
