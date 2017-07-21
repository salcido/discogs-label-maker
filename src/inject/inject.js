// TODO
// Save "genre" state so subsequent changes to note content do not wipe out
// any changes to the genre entry
// ---------------------------------------------------------------------------

/**
 * @Note:
 *
 * This label is sized to 2 5/16 x 4.
 *
 * To change it to 2 1/8 x4 change:
 * `PaperName` to `30323 Shipping`
 */


// ========================================================
// Label Template XML
// ========================================================

let template = '<?xml version="1.0" encoding="utf-8"?>\
                  <DieCutLabel Version="8.0" Units="twips">\
                    <PaperOrientation>Landscape</PaperOrientation>\
                    <Id>Shipping</Id>\
                    <PaperName>30256 Shipping</PaperName>\
                    <DrawCommands>\
                      <RoundRectangle X="0" Y="0" Width="3331" Height="5715" Rx="270" Ry="270"/>\
                    </DrawCommands>\
                    <ObjectInfo>\
                      <TextObject>\
                        <Name>ARTIST</Name>\
                        <ForeColor Alpha="255" Red="0" Green="0" Blue="0"/>\
                        <BackColor Alpha="0" Red="255" Green="255" Blue="255"/>\
                        <LinkedObjectName></LinkedObjectName>\
                        <Rotation>Rotation0</Rotation>\
                        <IsMirrored>False</IsMirrored>\
                        <IsVariable>True</IsVariable>\
                        <HorizontalAlignment>Left</HorizontalAlignment>\
                        <VerticalAlignment>Top</VerticalAlignment>\
                        <TextFitMode>None</TextFitMode>\
                        <UseFullFontHeight>True</UseFullFontHeight>\
                        <Verticalized>False</Verticalized>\
                        <StyledText>\
                          <Element>\
                            <String>Artist Title</String>\
                            <Attributes>\
                              <Font Family="Helvetica" Size="12" Bold="True" Italic="False" Underline="False" Strikeout="False"/>\
                              <ForeColor Alpha="255" Red="0" Green="0" Blue="0"/>\
                            </Attributes>\
                          </Element>\
                        </StyledText>\
                      </TextObject>\
                      <Bounds X="307.1997" Y="73.64145" Width="5323.2" Height="328.5938"/>\
                    </ObjectInfo>\
                    <ObjectInfo>\
                      <TextObject>\
                        <Name>TITLE</Name>\
                        <ForeColor Alpha="255" Red="0" Green="0" Blue="0"/>\
                        <BackColor Alpha="0" Red="255" Green="255" Blue="255"/>\
                        <LinkedObjectName></LinkedObjectName>\
                        <Rotation>Rotation0</Rotation>\
                        <IsMirrored>False</IsMirrored>\
                        <IsVariable>True</IsVariable>\
                        <HorizontalAlignment>Left</HorizontalAlignment>\
                        <VerticalAlignment>Top</VerticalAlignment>\
                        <TextFitMode>None</TextFitMode>\
                        <UseFullFontHeight>True</UseFullFontHeight>\
                        <Verticalized>False</Verticalized>\
                        <StyledText>\
                          <Element>\
                            <String>Release title</String>\
                            <Attributes>\
                              <Font Family="Helvetica" Size="9" Bold="False" Italic="False" Underline="False" Strikeout="False"/>\
                              <ForeColor Alpha="255" Red="0" Green="0" Blue="0"/>\
                            </Attributes>\
                          </Element>\
                        </StyledText>\
                      </TextObject>\
                      <Bounds X="307.1997" Y="376.9271" Width="5323.2" Height="223.2292"/>\
                    </ObjectInfo>\
                    <ObjectInfo>\
                      <TextObject>\
                        <Name>GENRE</Name>\
                        <ForeColor Alpha="255" Red="0" Green="0" Blue="0"/>\
                        <BackColor Alpha="0" Red="255" Green="255" Blue="255"/>\
                        <LinkedObjectName></LinkedObjectName>\
                        <Rotation>Rotation0</Rotation>\
                        <IsMirrored>False</IsMirrored>\
                        <IsVariable>True</IsVariable>\
                        <HorizontalAlignment>Left</HorizontalAlignment>\
                        <VerticalAlignment>Top</VerticalAlignment>\
                        <TextFitMode>None</TextFitMode>\
                        <UseFullFontHeight>True</UseFullFontHeight>\
                        <Verticalized>False</Verticalized>\
                        <StyledText>\
                          <Element>\
                            <String>Genre</String>\
                            <Attributes>\
                              <Font Family="Helvetica" Size="10" Bold="True" Italic="False" Underline="False" Strikeout="False"/>\
                              <ForeColor Alpha="255" Red="0" Green="0" Blue="0"/>\
                            </Attributes>\
                          </Element>\
                        </StyledText>\
                      </TextObject>\
                      <Bounds X="316.1458" Y="761.3541" Width="5323.2" Height="337.7604"/>\
                    </ObjectInfo>\
                    <ObjectInfo>\
                      <TextObject>\
                        <Name>NOTES</Name>\
                        <ForeColor Alpha="255" Red="0" Green="0" Blue="0"/>\
                        <BackColor Alpha="0" Red="255" Green="255" Blue="255"/>\
                        <LinkedObjectName></LinkedObjectName>\
                        <Rotation>Rotation0</Rotation>\
                        <IsMirrored>False</IsMirrored>\
                        <IsVariable>True</IsVariable>\
                        <HorizontalAlignment>Left</HorizontalAlignment>\
                        <VerticalAlignment>Top</VerticalAlignment>\
                        <TextFitMode>None</TextFitMode>\
                        <UseFullFontHeight>True</UseFullFontHeight>\
                        <Verticalized>False</Verticalized>\
                        <StyledText>\
                          <Element>\
                            <String>Release notes</String>\
                            <Attributes>\
                              <Font Family="Helvetica" Size="8" Bold="False" Italic="False" Underline="False" Strikeout="False"/>\
                              <ForeColor Alpha="255" Red="0" Green="0" Blue="0"/>\
                            </Attributes>\
                          </Element>\
                        </StyledText>\
                      </TextObject>\
                      <Bounds X="307.1997" Y="1199.789" Width="5323.2" Height="2000"/>\
                    </ObjectInfo>\
                    <ObjectInfo>\
                      <ShapeObject>\
                        <Name>SHAPE</Name>\
                        <ForeColor Alpha="255" Red="0" Green="0" Blue="0"/>\
                        <BackColor Alpha="0" Red="255" Green="255" Blue="255"/>\
                        <LinkedObjectName></LinkedObjectName>\
                        <Rotation>Rotation0</Rotation>\
                        <IsMirrored>False</IsMirrored>\
                        <IsVariable>False</IsVariable>\
                        <ShapeType>HorizontalLine</ShapeType>\
                        <LineWidth>20</LineWidth>\
                        <LineAlignment>LeftOrTop</LineAlignment>\
                        <FillColor Alpha="0" Red="0" Green="0" Blue="0"/>\
                      </ShapeObject>\
                      <Bounds X="307.1997" Y="652.9683" Width="5323.2" Height="94.42623"/>\
                    </ObjectInfo>\
                    <ObjectInfo>\
                      <ShapeObject>\
                        <Name>SHAPE_1</Name>\
                        <ForeColor Alpha="255" Red="0" Green="0" Blue="0"/>\
                        <BackColor Alpha="0" Red="255" Green="255" Blue="255"/>\
                        <LinkedObjectName></LinkedObjectName>\
                        <Rotation>Rotation0</Rotation>\
                        <IsMirrored>False</IsMirrored>\
                        <IsVariable>False</IsVariable>\
                        <ShapeType>HorizontalLine</ShapeType>\
                        <LineWidth>20</LineWidth>\
                        <LineAlignment>LeftOrTop</LineAlignment>\
                        <FillColor Alpha="0" Red="0" Green="0" Blue="0"/>\
                      </ShapeObject>\
                      <Bounds X="307.1997" Y="1050.367" Width="5323.2" Height="94.42623"/>\
                    </ObjectInfo>\
                  </DieCutLabel>';

// ========================================================
// Shared vars
// ========================================================

let genreLinks = [...document.querySelectorAll('a[href^="/style/"]')],
    genres = '',
    printers = dymo.label.framework.getPrinters();

// extract the genre names from the genre links
// returns a string like: 'genre name / genre name /...'
genreLinks.forEach(function(genre, i) {

  genres = i < genreLinks.length - 1 ? genres += genre.textContent + ' / ' : genres += genre.textContent;
});

// ========================================================
// Functions (Alphabetical)
// ========================================================

/**
 * Renders a preview of the label into the DOM when clicked
 * @method attachPreviewListener
 * @return {undefined}
 */
function attachPreviewListener() {

  document.getElementById('label-btn').addEventListener('click', function() {

    let
        artist,
        existingLabel = document.querySelector('.label-wrap'),
        info,
        label = dymo.label.framework.openLabelXml(template),
        notes = document.querySelector('.notes_text').innerHTML,
        pngData,
        release = document.getElementById('profile_title').textContent,
        title;

    // strip whitespace, etc...
    release = release.replace(/\s{2,}/g,' ');

    // create array with artist/title
    info = release.match(/\S+./g).join('').split('–');

    // strip Artist name enumeration
    info[0] = info[0].replace(/\(\d*\)/g, '');

    // strip Artist Name Variation
    info[0] = info[0].replace(/\*/g, '');

    // clean up artist/title
    artist = info[0].slice(0, info[0].length - 2);
    title = info[1].trim();

    // clean up notes
    notes = clean(notes).trim();

    label.setObjectText('ARTIST', prompt('Artist(s)?', artist));
    label.setObjectText('TITLE', title);
    label.setObjectText('GENRE', prompt('Genre?', genres));
    label.setObjectText('NOTES', notes);

    pngData = label.render();

    if ( existingLabel ) {

      existingLabel.parentNode.removeChild(existingLabel);
    }

    insertLabel(pngData);
    attachPrintListener(label);
    togglePrintButton();
  });
}

/**
 * Sends the label data to the printer for printing
 * @method attachPrintListener
 * @type {string} label [The label data]
 * @return {undefined}
 */
function attachPrintListener(label) {

  document.querySelector('.label-wrap').addEventListener('click', function() {

    // Print the label
    if ( window.confirm('Print this label?') ) {

      let paramsXml = dymo.label.framework.createLabelWriterPrintParamsXml({ copies: 1 }),
          labelSetXml = new dymo.label.framework.LabelSetBuilder();

      dymo.label.framework.printLabel(printers[0].name, paramsXml, label, labelSetXml);
    }
  });
}

/**
 * Cleans up the notes so they are suitable for printing
 * @method clean
 * @param  {string} text the text to examine
 * @return {string}
 */
function clean(text) {

  return text.replace(/<br>/g, '\n')
             .replace(/<b>/g, '')
             .replace(/<\/b>/g, '')
             .replace(/<u>/g, '')
             .replace(/<\/u>/g, '')
             .replace(/<i>/g, '')
             .replace(/<\/i>/g, '')
             .replace(/<s>/g, '')
             .replace(/<\/s>/g, '')
             .replace('🎾', '')
             .replace(/⭐️/g, '★')
             .replace(/&amp;/g, '&')
             .replace(/&lt;/g, '<')
             .replace(/&gt;/g, '>')
             .replace(/&quot;/g, '"');
}

/**
 * Injects the preview link into the DOM
 * @method injectPreviewLink
 * @return {undefined}
 */
function injectPreviewLink() {

  let btn = document.createElement('button'),
      div = document.createElement('div'),
      page = document.querySelector('#page_aside .card_in_collection');

  div.className = 'section_content';
  div.style.textAlign = 'center';

  btn.textContent = 'Preview label';
  btn.id = 'label-btn';
  btn.className = 'button_blue button';
  btn.style.width = '40%';

  div.append(btn);
  page.append(div);
}

/**
 * Inserts the label preview into the DOM
 * @method insertLabel
 * @param  {string}    data base64 encoded .png
 * @return {undefined}
 */
function insertLabel(data) {

  let img = document.createElement('img'),
      imgWrap = document.createElement('div'),
      page = document.querySelector('#page_aside .card_in_collection');

  img.id = 'preview';
  img.src = 'data:image/png;base64,' + data;
  img.style.width = '100%';

  imgWrap.className = 'label-wrap';
  imgWrap.style.position = 'relative';
  imgWrap.style.cursor = 'pointer';

  imgWrap.append(img);
  imgWrap.append( makePrintBtn() );

  page.append(imgWrap);
}

/**
 * Creates the 'Print label' button markup.
 * @method makePrintBtn
 * @return {object}
 */
function makePrintBtn() {

  let btn = document.createElement('button');

  btn.textContent = 'Print label?';
  btn.id = 'print-btn';
  //btn.className = 'button_green button';

  btn.style.fontSize = '35px';
  btn.style.fontWeight = 'bold';
  btn.style.left = '23%';
  btn.style.opacity = 0;
  btn.style.position = 'absolute';
  btn.style.setProperty('color', 'white', 'important');
  btn.style.setProperty('text-shadow', '0px 2px dimGray');
  btn.style.top = '36%';

  return btn;
}

/**
 * Shows/hides the `Print label` button
 * @method togglePrintButton
 * @return {undefined}
 */
function togglePrintButton() {

  let wrap = document.querySelector('.label-wrap'),
      label = document.getElementById('preview'),
      printBtn = document.getElementById('print-btn');

  // Animate fades
  label.style.transition = 'all 0.3s';
  printBtn.style.transition = 'opacity 0.3s';

  // Show the print button
  wrap.addEventListener('mouseenter', function() {

    printBtn.style.opacity = 1;
    label.style.cursor = 'pointer';
    label.style.opacity = 0.5;
    label.style.filter = 'blur(1px)';
  });

  // Hide the print button
  wrap.addEventListener('mouseleave', function() {

    printBtn.style.opacity = 0;
    label.style.opacity = 1;
    label.style.filter = 'blur(0px)';
  });
}


// ========================================================
// Init / DOM setup
// ========================================================

chrome.extension.sendMessage({}, function() {

  let readyStateCheckInterval = setInterval(function() {

    if ( document.readyState === 'interactive' ) {

      clearInterval(readyStateCheckInterval);

      // Don't do anything if the release is not in your collection
      if (
           [...document.querySelectorAll('#page_aside .cw_block_collection')].length < 1 ||
           !window.location.href.includes('/release/') ) {
        return;
      }

      injectPreviewLink();
      attachPreviewListener();
    }
  }, 10);
});
