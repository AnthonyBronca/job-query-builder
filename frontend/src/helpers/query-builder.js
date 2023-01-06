
const buildSites = (sites) => {
    const sitesArray = sites.split(',')

    return sitesArray
}

const buildTerms = (terms) => {
    const termsArray = terms.split(',')
    return termsArray
}

const buildLocations = (locations) => {
    const locationsArray = locations.split(',')
    return locationsArray
}

const buildOmits = (omits) => {
    const omitsArray = omits.split(',')
    return omitsArray
}


const buildString = (sitesList, searchInputList, searchLocationList, excludedInputList) => {

    const stringList = [];

    if (sitesList) {
        for (let site of sitesList) {
            stringList.push(`site:${site}`);
            stringList.push(' OR ')
        }

        stringList.pop();
    }
    if (searchInputList) {
        stringList.push(' ');
        for (let search of searchInputList) {
            stringList.push(`"${search}"`);
            stringList.push(' OR ')
        }
        stringList.pop();
    }
    if (searchLocationList) {

        stringList.push(' ');
        for (let location of searchLocationList) {
            stringList.push(`"${location}"`);
            stringList.push(' OR ');
        }
        stringList.pop();

    }
    if (excludedInputList) {
        stringList.push(' ');
        for (let item of excludedInputList) {
            stringList.push(`-${item}`)
            stringList.push(' ');
        }
        stringList.pop();
    }

    return stringList.join('')
}

const buildQuery = ({ sites, terms, locations, omit }) => {
    let sitesList;
    let searchInputList;
    let searchLocationList;
    let excludedInputList;

    if (sites) {
        sitesList = buildSites(sites);
    }
    if (terms) {
        searchInputList = buildTerms(terms);
    }
    if (locations) {
        searchLocationList = buildLocations(locations);
    }
    if (omit) {
        excludedInputList = buildOmits(omit)
    }

    return buildString(sitesList, searchInputList, searchLocationList, excludedInputList)
}





export default buildQuery
