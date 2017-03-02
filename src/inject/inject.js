// ========================================================
// Shared vars
// ========================================================

let genreLinks = [...document.querySelectorAll('a[href^="/style/"]')],
		genres = '',
		printers = dymo.label.framework.getPrinters();

// extract the genre names from the genre links
genreLinks.forEach(function(genre, i) {
	genres = i < genreLinks.length - 1 ? genres += genre.textContent + ' / ' : genres += genre.textContent;
});

// ========================================================
// Functions
// ========================================================

/**
 * Inserts the lable preview into the DOM
 * @method insertLabel
 * @param  {string}    data [base64 encoded .png]
 * @return {undefined}
 */
function insertLabel(data) {

	let page = document.querySelector('.card_in_collection'),
			img = document.createElement('img');

	img.src = 'data:image/png;base64,' + data;
	img.style = 'max-width: 375px; cursor: pointer;';
	img.id = 'preview';

	page.append(img);
}

/**
 * Injects the preview link into the DOM
 * @method injectPreviewLink
 * @return {undefined}
 */
function injectPreviewLink() {

	let page = document.querySelector('.card_in_collection'),
			div = document.createElement('div'),
			btn = document.createElement('button');

	div.className = 'section_content';

	btn.textContent = 'Preview label';
	btn.id = 'label-btn';
	btn.className = 'button_blue button';

	div.append(btn);
	page.append(div);
}

/**
 * Sends the label data to the printer for printing
 * @method attachPrintListener
 * @param  {label} label [the label data]
 * @return {undefined}
 */
function attachPrintListener(label) {

	document.getElementById('preview').addEventListener('click', function() {

		// Print the label
		if (window.confirm('Print this label?')) {

			let paramsXml = dymo.label.framework.createLabelWriterPrintParamsXml({ copies: 1 }),
					labelSetXml = new dymo.label.framework.LabelSetBuilder();

			dymo.label.framework.printLabel(printers[0].name, paramsXml, label, labelSetXml);
		}
	});
}

/**
 * Renders a preview of the label into the DOM when clicked
 * @method attachPreviewListener
 * @return {undefined}
 */
function attachPreviewListener() {

	document.getElementById('label-btn').addEventListener('click', function() {

		let // change this path to point to the label on your local machine
				path = 'file:///path/to/discogs-label-maker/label/record-label-fields.xml',
				label = dymo.label.framework.openLabelFile(path),
				release = document.getElementById('profile_title').textContent,
				existingLabel = document.getElementById('preview'),
				genrePrompt = prompt('Genre?', genres),
				notes = document.querySelector('.notes_text').dataset.content,
				info,
				artist,
				title,
				pngData;

		// strip whitespace, etc...
		release = release.replace(/\s{2,}/g,' ');

		// create array with artist/title
		info = release.match(/\S+./g).join('').split('–');

		// strip Artist name enumeration
		info[0] = info[0].replace(/\(\d\)/g, '');

		// strip Artist Name Variation
		info[0] = info[0].replace(/\*/g, '');

		// clean up artist/title
		artist = info[0].trim();
		title = info[1].trim();

		// remove/replace emojis
		notes = notes.replace('🎾', '');
		notes = notes.replace(/⭐️/g, '★');

		label.setObjectText('ARTIST', artist);
		label.setObjectText('TITLE', title);
		label.setObjectText('GENRE', genrePrompt);
		label.setObjectText('NOTES', notes.trim());

		pngData = label.render();

		if (existingLabel) {
			existingLabel.parentNode.removeChild(existingLabel);
		}

		insertLabel(pngData);
		attachPrintListener(label);
	});
}

// ========================================================
// DOM setup
// ========================================================
chrome.extension.sendMessage({}, function(response) {

	let readyStateCheckInterval = setInterval(function() {

		if ( document.readyState === 'complete' ) {

			clearInterval(readyStateCheckInterval);

			// Don't do anything if the release is not in your collection
			if ( [...document.querySelectorAll('.card_in_collection')].length < 1 || 
					 !window.location.href.includes('/release/') ) {
				return;
			}

			injectPreviewLink();
			attachPreviewListener();
		}
	}, 10);
});
