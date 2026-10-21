import catalogEntries from './CatalogEntries';

/** Examples actually rendered by this catalog, including composition parts. */
const previewPages = new Map<string, string>([
  ['Accordion', 'Navigation'],
  ['AccordionSummary', 'Navigation'],
  ['AccordionDetails', 'Navigation'],
  ['Alert', 'Alert'],
  ['AlertTitle', 'Alert'],
  ['Button', 'Buttons'],
  ['IconButton', 'Buttons'],
  ['TextField', 'Text fields'],
  ['Checkbox', 'Selection'],
  ['Switch', 'Selection'],
  ['Radio', 'Selection'],
  ['RadioGroup', 'Selection'],
  ['FormControlLabel', 'Selection'],
  ['Slider', 'Selection'],
  ['Dialog', 'Dialogs'],
  ['DialogTitle', 'Dialogs'],
  ['DialogContent', 'Dialogs'],
  ['DialogContentText', 'Dialogs'],
  ['DialogActions', 'Dialogs'],
  ['Snackbar', 'Snackbar'],
  ['SnackbarContent', 'Snackbar'],
  ['LinearProgress', 'Progress'],
  ['CircularProgress', 'Progress'],
  ['Skeleton', 'Progress'],
  ['Tabs', 'Navigation'],
  ['Tab', 'Navigation'],
  ['Card', 'Cards'],
  ['CardContent', 'Cards'],
  ['CardActions', 'Cards'],
  ['Chip', 'Cards'],
  ['Table', 'Tables'],
  ['TableContainer', 'Tables'],
  ['TableHead', 'Tables'],
  ['TableBody', 'Tables'],
  ['TableRow', 'Tables'],
  ['TableCell', 'Tables'],
  ['Typography', 'Typography'],
  ['Box', 'Navigation'],
  ['Stack', 'Selection'],
  ['ToggleButton', 'Buttons'],
  ['ToggleButtonGroup', 'Buttons'],
  ['Tooltip', 'Buttons'],
  ['CssBaseline', 'Overview'],
]);

for (const [page, entry] of Object.entries(catalogEntries)) {
  for (const component of entry.components) {
    previewPages.set(component, page);
  }
}

/** Read the fork's public component exports, without importing the component barrel. */
const componentCoverage = TRO_COMPONENT_NAMES.map((name) => ({
  name,
  page: previewPages.get(name),
})).sort((first, second) => first.name.localeCompare(second.name));

export default componentCoverage;
