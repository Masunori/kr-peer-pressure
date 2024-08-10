// each role of a CCA will have an array of points in the format of 
// [sports, culture, comms, leadership, special]

// ------------------------------------------------------------------------
// initialise a new map that maps from id-name to corresponding CCA classes
// and a map that maps from the CCA name to its abbreviations -------------
// ------------------------------------------------------------------------

const ccaMap: Map<string, CCA> = new Map();
const ccaAbbr: Map<string, string> = new Map();

class CCA {
    name: string;
    ccaTag: string;
    rolePointMap: Map<string, number[]>;

    constructor(name: string, ccaTag: string) {
        this.name = name;
        this.ccaTag = ccaTag;
        this.rolePointMap = new Map();
    }

    getPoints(role: string) {
        return this.rolePointMap.has(role)
               ? this.rolePointMap.get(role)
               : [0, 0, 0, 0, 0];
    }

    getCCAClassification() {
        return this.ccaTag;
    }
}

// --------------------------------
// sports CCA logic----------------
// --------------------------------
class Sports extends CCA {
    constructor(name: string) {
        super(name, "sports");
        this.rolePointMap = new Map();

        this.rolePointMap.set("captain", [16, 0, 0, 4, 0]);
        this.rolePointMap.set("co-captain", [16, 0, 0, 3, 0]);
        this.rolePointMap.set("vice-captain", [16, 0, 0, 2, 0]);
        this.rolePointMap.set("member", [10, 0, 0, 0, 0]);
        this.rolePointMap.set("training-team", [16, 0, 0, 0, 0]);
        this.rolePointMap.set("team-manager", [0, 0, 0, 3, 0]);
    }
}

// --------------------------------
// culture CCA logic---------------
// --------------------------------
class Culture extends CCA {
    constructor(name: string) {
        super(name, "culture");
    }
}

// for Acapella, Inspire, Rockers and Choir
class AIRC extends Culture {
    constructor(name: string) {
        super(name);
        this.rolePointMap = new Map();

        this.rolePointMap.set("chairperson", [0, 12, 0, 4, 0]);
        this.rolePointMap.set("vice-chairperson", [0, 12, 0, 2, 0]);
        this.rolePointMap.set("committee-member", [0, 12, 0, 1, 0]);
        this.rolePointMap.set("member", [0, 12, 0, 0, 0]);
    }
}

// for Dance
class Dance extends Culture {
    constructor() {
        super("dance");
        this.rolePointMap = new Map();

        this.rolePointMap.set("chairperson", [0, 16, 0, 8, 0]);
        this.rolePointMap.set("vice-chairperson", [0, 16, 0, 7, 0]);
        this.rolePointMap.set("committee-member", [0, 16, 0, 6, 0]);
        this.rolePointMap.set("member", [0, 20, 0, 0, 0]);
    }
}

// for Remix
class Remix extends Culture {
    constructor() {
        super("remix");
        this.rolePointMap = new Map();

        this.rolePointMap.set("chairperson", [0, 9, 0, 6, 0]);
        this.rolePointMap.set("vice-chairperson", [0, 9, 0, 4, 0]);
        this.rolePointMap.set("member", [0, 11, 0, 0, 0]);
    }
}

// for Steppers
class Steppers extends Culture {
    constructor() {
        super("steppers");
        this.rolePointMap = new Map();

        this.rolePointMap.set("chairperson", [17, 17, 0, 0, 0]);
        this.rolePointMap.set("vice-chairperson", [16, 16, 0, 0, 0]);
        this.rolePointMap.set("committee-member", [15, 15, 0, 6, 0]);
        this.rolePointMap.set("member", [14, 14, 0, 0, 0]);
    }
}

// for KR Hall Production
class HallProduction extends Culture {
    constructor() {
        super("krhp");
        this.rolePointMap = new Map();

        this.rolePointMap.set("cast-performer", [0, 8, 0, 0, 0]);
        this.rolePointMap.set("main-cast", [0, 10, 0, 0, 0]);
    }
}

// --------------------------------
// major committees logic----------
// --------------------------------

// for most comms
class MajorComms extends CCA {
    constructor(name: string) {
        super(name, "major-committees");
        this.rolePointMap = new Map();

        this.rolePointMap.set("chairperson", [0, 0, 10, 4, 0]);
        this.rolePointMap.set("co-chairperson", [0, 0, 10, 3, 0]);
        this.rolePointMap.set("vice-chairperson", [0, 0, 10, 2, 0]);
        this.rolePointMap.set("member", [0, 0, 10, 0, 0]);
    }
}

// for Alumni Relations and Engagement Committee and Welfare Committee
class AREWelfare extends MajorComms {
    constructor(name: string) {
        super(name);
        this.rolePointMap = new Map();

        this.rolePointMap.set("chairperson", [0, 0, 12, 4, 0]);
        this.rolePointMap.set("vice-chairperson", [0, 0, 12, 2, 0]);
        this.rolePointMap.set("member", [0, 0, 12, 0, 0]);
    }
}

// for JCRC Finance Executives
class JCRCFinanceExecutive extends MajorComms {
    constructor() {
        super("jcrc-finance-exec");
    }

    getPoints(role: string) {
        return [0, 0, 0, 12, 0];
    }
}

// for JC Outreach Executives
class JCOExecutive extends MajorComms {
    constructor() {
        super("jco-exec");
    }

    getPoints(role: string) {
        return [0, 0, 0, 8, 0];
    }
}

// for Culture Executives
class CultureExecutive extends MajorComms {
    constructor() {
        super("culture-exec");
    }

    getPoints(role: string) {
        return [0, 0, 0, 4, 0];
    }
}

// --------------------------------
// intermediate committees logic---
// --------------------------------

class IntermediateComms extends CCA {
    constructor(name: string) {
        super(name, "intermediate-committees");
        this.rolePointMap = new Map();

        this.rolePointMap.set("chairperson", [0, 0, 8, 4, 0]);
        this.rolePointMap.set("co-chairperson", [0, 0, 8, 3, 0]);
        this.rolePointMap.set("vice-chairperson", [0, 0, 8, 2, 0]);
        this.rolePointMap.set("member", [0, 0, 8, 0, 0]);
    }
}

// --------------------------------
// minor committees logic----------
// --------------------------------

class MinorComms extends CCA {
    constructor(name: string) {
        super(name, "minor-committees");
        this.rolePointMap = new Map();

        this.rolePointMap.set("chairperson", [0, 0, 6, 4, 0]);
        this.rolePointMap.set("co-chairperson", [0, 0, 6, 3, 0]);
        this.rolePointMap.set("vice-chairperson", [0, 0, 6, 2, 0]);
        this.rolePointMap.set("member", [0, 0, 6, 0, 0]);
    }
}

// --------------------------------
// special committees logic--------
// --------------------------------

class SpecialComms extends CCA {
    constructor(name: string) {
        super(name, "special-committees");
    }
}

// for Junior Common Room Committee
class JCRC extends SpecialComms {
    constructor() {
        super("jcrc");
    }

    getPoints(role: string) {
        return [0, 0, 0, 0, 10000];
    }
}

// for Block Committee
class BlockComms extends SpecialComms {
    constructor() {
        super("block");

        this.rolePointMap = new Map();
        this.rolePointMap.set("block-head", [0, 0, 0, 0, 10000]);
        this.rolePointMap.set("member", [0, 0, 10, 6, 0]);
    }
}

// for Hall Promotion Board
class HPB extends SpecialComms {
    constructor() {
        super("hpb");
        this.rolePointMap = new Map();

        this.rolePointMap.set("chairperson", [0, 0, 18, 4, 0]);
        this.rolePointMap.set("vice-chairperson", [0, 0, 18, 2, 0]);
        this.rolePointMap.set("member", [0, 0, 18, 0, 0]);
    }
}

// for KR Dance Production
class KRDP extends SpecialComms {
    constructor() {
        super("krdp");
        this.rolePointMap = new Map();

        this.rolePointMap.set("producer", [0, 0, 12, 4, 0]);
        this.rolePointMap.set("director", [0, 0, 12, 4, 0]);
        this.rolePointMap.set("assistant-producer", [0, 0, 12, 2, 0]);
        this.rolePointMap.set("assistant-director", [0, 0, 12, 2, 0]);
        this.rolePointMap.set("executives", [0, 0, 12, 2, 0]);
        this.rolePointMap.set("stage-manager", [0, 0, 10, 2, 0]);
        this.rolePointMap.set("media-specialist", [0, 0, 10, 2, 0]);
        this.rolePointMap.set("publicity-team", [0, 0, 8, 0, 0]);
        this.rolePointMap.set("finance-team", [0, 0, 8, 0, 0]);
        this.rolePointMap.set("stage-crew", [0, 0, 8, 0, 0]);
    }
}

// ----------------------------------------------
// orientation programme committees logic--------
// ----------------------------------------------

class OriComms extends CCA {
    constructor(name: string) {
        super(name, "orientation-committee");
    }
}

// for no orientation committee 
class NoOriComms extends OriComms {
    constructor() {
        super("no-orientation-committees");
    }

    getPoints(role: string) {
        return [0, 0, 0, 0, 0];
    }
}

// for Receive and Give Committee
class RAG extends OriComms {
    constructor() {
        super("rag");
        this.rolePointMap = new Map();

        this.rolePointMap.set("project-director", [0, 0, 9, 2, 0]);
        this.rolePointMap.set("vice-chairperson", [0, 0, 9, 1, 0]);
        this.rolePointMap.set("member", [0, 0, 9, 0, 0]);
    }
}

// for FLAG Committee
class FLAG extends OriComms {
    constructor() {
        super("flag");
        this.rolePointMap = new Map();

        this.rolePointMap.set("chairperson", [0, 0, 10, 2, 0]);
        this.rolePointMap.set("vice-chairperson", [0, 0, 10, 1, 0]);
        this.rolePointMap.set("member", [0, 0, 10, 0, 0]);
    }
}

// for FWOC Committee
class FWOC extends OriComms {
    constructor() {
        super("fwoc");
        this.rolePointMap = new Map();

        this.rolePointMap.set("chairperson", [0, 0, 9, 2, 0]);
        this.rolePointMap.set("vice-chairperson", [0, 0, 9, 1, 0]);
        this.rolePointMap.set("member", [0, 0, 9, 0, 0]);
    }
}

// ------------------------------
// media committees logic--------
// ------------------------------

class MediaComms extends CCA {
    constructor(name: string) {
        super(name, "media-committees");
    }
}

// for KRaphics, Video Production Team, Photo Committee and Technical Support Unit
class KVPT extends MediaComms {
    constructor(name: string) {
        super(name);
        this.rolePointMap = new Map();

        this.rolePointMap.set("chairperson", [0, 0, 4, 4, 0]);
        this.rolePointMap.set("vice-chairperson", [0, 0, 4, 2, 0]);
        this.rolePointMap.set("member", [0, 0, 4, 0, 0]);
    }
}

// for KReporters 
class KReporters extends MediaComms {
    constructor() {
        super("kreporters");
        this.rolePointMap = new Map();

        this.rolePointMap.set("chairperson", [0, 0, 0, 4, 0]);
        this.rolePointMap.set("vice-chairperson", [0, 0, 0, 2, 0]);
        this.rolePointMap.set("member", [0, 0, 0, 0, 0]);
    }
}

// for Hall Annual Magazine
class HAM extends MediaComms {
    constructor() {
        super("ham");
        this.rolePointMap = new Map();

        this.rolePointMap.set("co-editor", [0, 0, 14, 0, 0]);
    }
}

// ------------------------------
// special contributions logic---
// ------------------------------

class SpecialContributions extends CCA {
    constructor(name: string) {
        super(name, "special-contributions");
    }
}

// for RAG Floaters
class RAGFloaters extends SpecialContributions {
    constructor() {
        super("rag-floaters");
    }

    getPoints(role: string) {
        return [0, 0, 0, 0, 6];
    }
}

// for RAG Dancers
class RAGDancers extends SpecialContributions {
    constructor() {
        super("rag-dancers");
    }

    getPoints(role: string) {
        return [0, 0, 0, 0, 6];
    }
}

// for emcees
class Emcees extends SpecialContributions {
    constructor() {
        super("emcees");
        this.rolePointMap = new Map();

        this.rolePointMap.set("emcees", [0, 0, 0, 0, 0]);
    }

    getPoints(role: string) {
        return this.rolePointMap.get("emcees");
    }
}

// for emcees
class Emcee extends SpecialContributions {
    constructor() {
        super("emcees");
        this.rolePointMap = new Map();

        this.rolePointMap.set("emcees", [0, 0, 0, 0, 0]);
    }

    getPoints(role: string) {
        return this.rolePointMap.get("emcees");
    }
}

// for Camp Blue Blood facilitators
class CBBFaciltator extends SpecialContributions {
    constructor() {
        super("cbb-facilitators");
        this.rolePointMap = new Map();

        this.rolePointMap.set("cbb-facilitators", [0, 0, 0, 0, 0]);
    }

    getPoints(role: string) {
        return this.rolePointMap.get("cbb-facilitators");
    }
}

// for FWOC seniors
class FWOCSenior extends SpecialContributions {
    constructor() {
        super("fwoc-seniors");
        this.rolePointMap = new Map();

        this.rolePointMap.set("fwoc-seniors", [0, 0, 0, 0, 0]);
    }

    getPoints(role: string) {
        return this.rolePointMap.get("fwoc-seniors");
    }
}

// for CBB/FWOC Safety Personnel
class CFSP extends SpecialContributions {
    constructor() {
        super("cbb-fwoc-safety-personnel");
        this.rolePointMap = new Map();

        this.rolePointMap.set("cbb-fwoc-safety-personnel", [0, 0, 0, 0, 0]);
    }

    getPoints(role: string) {
        return this.rolePointMap.get("cbb-fwoc-safety-personnel");
    }
}

// for Stage Crews
class StageCrew extends SpecialContributions {
    constructor() {
        super("stage-crew");
        this.rolePointMap = new Map();

        this.rolePointMap.set("stage-crew", [0, 0, 0, 0, 0]);
    }

    getPoints(role: string) {
        return this.rolePointMap.get("stage-crew");
    }
}

// for Elections Committee members
class ECM extends SpecialContributions {
    constructor() {
        super("ecm");
    }

    getPoints(role: string) {
        return [0, 0, 0, 0, 3];
    }
}

// for Merit Allocation Board members 
class MAB extends SpecialContributions {
    constructor() {
        super("mab");
    }

    getPoints(role: string) {
        return [0, 0, 0, 0, 4];
    }
}

// for Points Allocation Board members 
class PAB extends SpecialContributions {
    constructor() {
        super("pab");
    }

    getPoints(role: string) {
        return [0, 0, 0, 0, 4];
    }
}

// for Open Day Ambassadors 
class ODA extends SpecialContributions {
    constructor() {
        super("oda");
    }

    getPoints(role: string) {
        return [0, 0, 0, 0, 1];
    }
}

// for Star2Burst Performers
class S2B extends SpecialContributions {
    constructor() {
        super("s2b");
    }

    getPoints(role: string) {
        return [0, 0, 0, 0, 2];
    }
}

// for Sports Student Coach for Own Gender
class CoachOwnGender extends SpecialContributions {
    constructor() {
        super("coach-own-gender");
    }

    getPoints(role: string) {
        return [0, 0, 0, 0, 4];
    }
}

// for Sports Student Coach for Opposite Gender
class CoachOppositeGender extends SpecialContributions {
    constructor() {
        super("coach-opposite-gender");
    }

    getPoints(role: string) {
        return [0, 0, 0, 0, 8];
    }
}

// for Summer Finance Executives
class SFE extends SpecialContributions {
    constructor() {
        super("summer-finance-exec");
    }

    getPoints(role: string) {
        return [0, 0, 0, 0, 3];
    }
}

// for Significant Media Contribution
class MediaContributions extends SpecialContributions {
    constructor() {
        super("media-contributions");
    }

    getPoints(role: string) {
        return [0, 0, 0, 0, 5];
    }
}

// for Friends of KRV
class FoKRV extends SpecialContributions {
    constructor() {
        super("fokrv");
        this.rolePointMap = new Map();

        this.rolePointMap.set("fokrv", [0, 0, 0, 0, 0]);
    }

    getPoints(role: string) {
        return this.rolePointMap.get("fokrv");
    }
}

// for JC Outreach perticipants
class JCOParticipants extends SpecialContributions {
    constructor() {
        super("jco-participants");
    }

    getPoints(role: string) {
        return [0, 0, 0, 0, 2];
    }
}

// for Additional Contributions
class AdditionalContributions extends SpecialContributions {
    constructor() {
        super("additional-contributions");
        this.rolePointMap = new Map();

        this.rolePointMap.set("additional-contributions", [0, 0, 0, 0, 0]);
    }

    getPoints(role: string) {
        return this.rolePointMap.get("additional-contributions");
    }
}

// ------------------------------------------------------
// WEBSITE LOGIC ----------------------------------------
// ------------------------------------------------------

// compute the points
let hasInitialisedCCAMap = false;

function initialiseCCAMap() {
    if (hasInitialisedCCAMap) {
        return;
    }

    hasInitialisedCCAMap = true;

    // add sports
    ccaMap.set("badminton", new Sports("badminton"));
    ccaMap.set("basketball", new Sports("basketball"));
    ccaMap.set("floorball", new Sports("floorball"));
    ccaMap.set("frisbee-mixed", new Sports("frisbee-mixed"));
    ccaMap.set("handball", new Sports("handball"));
    ccaMap.set("netball", new Sports("netball"));
    ccaMap.set("road-relay", new Sports("road-relay"));
    ccaMap.set("sepak-takraw", new Sports("sepak-takraw"));
    ccaMap.set("soccer", new Sports("soccer"));
    ccaMap.set("softball-mixed", new Sports("softball-mixed"));
    ccaMap.set("squash", new Sports("squash"));
    ccaMap.set("swimming", new Sports("swimming"));
    ccaMap.set("table-tennis", new Sports("table-tennis"));
    ccaMap.set("tennis", new Sports("tennis"));
    ccaMap.set("touch-rugby", new Sports("touch-rugby"));
    ccaMap.set("track", new Sports("track"));
    ccaMap.set("volleyball", new Sports("volleyball"));

    // add cultures
    ccaMap.set("acapella", new AIRC("acapella"));
    ccaMap.set("inspire", new AIRC("inspire"));
    ccaMap.set("rockers", new AIRC("rockers"));
    ccaMap.set("choir", new AIRC("choir"));
    ccaMap.set("dance", new Dance());
    ccaMap.set("remix", new Remix());
    ccaMap.set("steppers", new Steppers());
    ccaMap.set("krhp", new HallProduction());

    // add major committees
    ccaMap.set("are", new AREWelfare("are"));
    ccaMap.set("eec", new MajorComms("eec"));
    ccaMap.set("krv", new MajorComms("krv"));
    ccaMap.set("safety", new MajorComms("safety"));
    ccaMap.set("sru", new MajorComms("sru"));
    ccaMap.set("welfare", new AREWelfare("welfare"));
    ccaMap.set("yep", new MajorComms("yep"));
    ccaMap.set("jcrc-finance-exec", new JCRCFinanceExecutive());
    ccaMap.set("jco-exec", new JCOExecutive());
    ccaMap.set("culture-exec", new CultureExecutive());

    // add intermediate committees
    ccaMap.set("heritage", new IntermediateComms("heritage"));
    ccaMap.set("ita", new IntermediateComms("ita"));
    ccaMap.set("kre", new IntermediateComms("kre"));

    // add minor committees
    ccaMap.set("environment", new MinorComms("environment"));

    // add special committees
    ccaMap.set("jcrc", new JCRC());
    ccaMap.set("block", new BlockComms());
    ccaMap.set("hpb", new HPB());

    // add orientation programme committees
    ccaMap.set("rag", new RAG());
    ccaMap.set("flag", new FLAG());
    ccaMap.set("fwoc", new FWOC());

    // add media committees
    ccaMap.set("kraphics", new KVPT("kraphics"));
    ccaMap.set("vpt", new KVPT("vpt"));
    ccaMap.set("photo", new KVPT("photo"));
    ccaMap.set("tsu", new KVPT("tsu"));
    ccaMap.set("kreporters", new KReporters());
    ccaMap.set("ham", new HAM());

    // add special contributions
    ccaMap.set("rag-floaters", new RAGFloaters());
    ccaMap.set("rag-dancers", new RAGDancers());
    ccaMap.set("emcees", new Emcee());
    ccaMap.set("cbb-facilitators", new CBBFaciltator());
    ccaMap.set("fwoc-seniors", new FWOCSenior());
    ccaMap.set("cbb-fwoc-safety-personnel", new CFSP());
    ccaMap.set("stage-crew", new StageCrew());
    ccaMap.set("ecm", new ECM());
    ccaMap.set("mab", new MAB());
    ccaMap.set("pab", new PAB());
    ccaMap.set("oda", new ODA());
    ccaMap.set("s2b", new S2B());
    ccaMap.set("coach-own-gender", new CoachOwnGender());
    ccaMap.set("coach-opposite-gender", new CoachOppositeGender());
    ccaMap.set("summer-finance-exec", new SFE());
    ccaMap.set("media-contributions", new MediaContributions());
    ccaMap.set("fokrv", new FoKRV());
    ccaMap.set("jco-participants", new JCOParticipants());
    ccaMap.set("additional-contributions", new AdditionalContributions());

    // now insert abbreviations
    // add sports
    ccaAbbr.set("badminton", "SPO-BDMN");
    ccaAbbr.set("basketball", "SPO-BSKT");
    ccaAbbr.set("floorball", "SPO-FLRB");
    ccaAbbr.set("frisbee-mixed", "SPO-FRSB");
    ccaAbbr.set("handball", "SPO-HNDB");
    ccaAbbr.set("netball", "SPO-NTBL");
    ccaAbbr.set("road-relay", "SPO-RDRL");
    ccaAbbr.set("sepak-takraw", "SPO-SPTK");
    ccaAbbr.set("soccer", "SPO-SCCR");
    ccaAbbr.set("softball-mixed", "SPO-SFTB");
    ccaAbbr.set("squash", "SPO-SQSH");
    ccaAbbr.set("swimming", "SPO-SWMM");
    ccaAbbr.set("table-tennis", "SPO-TBTN");
    ccaAbbr.set("tennis", "SPO-TNNS");
    ccaAbbr.set("touch-rugby", "SPO-TRUG");
    ccaAbbr.set("track", "SPO-TRCK");
    ccaAbbr.set("volleyball", "SPO-VLLB");

    // add cultures
    ccaAbbr.set("acapella", "CUL-ACAP");
    ccaAbbr.set("inspire", "CUL-INSP");
    ccaAbbr.set("rockers", "CUL-ROCK");
    ccaAbbr.set("choir", "CUL-CHOIR");
    ccaAbbr.set("dance", "CUL-DANCE");
    ccaAbbr.set("remix", "CUL-REMIX");
    ccaAbbr.set("steppers", "CUL-STPR");
    ccaAbbr.set("krhp", "CUL-KRHP");

    // add major committees
    ccaAbbr.set("are", "COM-ARE");
    ccaAbbr.set("eec", "COM-EEC");
    ccaAbbr.set("krv", "COM-KRV");
    ccaAbbr.set("safety", "COM-SAFE");
    ccaAbbr.set("sru", "COM-SRU");
    ccaAbbr.set("welfare", "COM-WLFR");
    ccaAbbr.set("yep", "COM-YEP");
    ccaAbbr.set("jcrc-finance-exec", "COM-JCRCFINEX");
    ccaAbbr.set("jco-exec", "COM-JCOEX");
    ccaAbbr.set("culture-exec", "COM-CULEX");

    // add intermediate committees
    ccaAbbr.set("heritage", "COM-HRT");
    ccaAbbr.set("ita", "COM-ITA");
    ccaAbbr.set("kre", "COM-KRE");

    // add minor committees
    ccaAbbr.set("environment", "COM-ENV");

    // add special committees
    ccaAbbr.set("jcrc", "COM-JRCR");
    ccaAbbr.set("block", "COM-BLK");
    ccaAbbr.set("hpb", "COM-HPB");

    // add orientation programme committees
    ccaAbbr.set("rag", "COM-RAG");
    ccaAbbr.set("flag", "COM-FLAG");
    ccaAbbr.set("fwoc", "COM-FWOC");

    // add media committees
    ccaAbbr.set("kraphics", "COM-GRA");
    ccaAbbr.set("vpt", "COM-VPT");
    ccaAbbr.set("photo", "COM-PHT");
    ccaAbbr.set("tsu", "COM-TSU");
    ccaAbbr.set("kreporters", "COM-RPT");
    ccaAbbr.set("ham", "COM-HAM");

    // add special contributions
    ccaAbbr.set("rag-floaters", "SPE-RAGf");
    ccaAbbr.set("rag-dancers", "SPE-RAGD");
    ccaAbbr.set("emcees", "SPE-MC");
    ccaAbbr.set("cbb-facilitators", "SPE-CBBF");
    ccaAbbr.set("fwoc-seniors", "SPE-FWOCS");
    ccaAbbr.set("cbb-fwoc-safety-personnel", "SPE-CFSP");
    ccaAbbr.set("stage-crew", "SPE-SC");
    ccaAbbr.set("ecm", "SPE-ECM");
    ccaAbbr.set("mab", "SPE-MAB");
    ccaAbbr.set("pab", "SPE-PAB");
    ccaAbbr.set("oda", "SPE-ODA");
    ccaAbbr.set("s2b", "SPE-S2B");
    ccaAbbr.set("coach-own-gender", "SPE-C-OWN");
    ccaAbbr.set("coach-opposite-gender", "SPE-C-OPP");
    ccaAbbr.set("summer-finance-exec", "SPE-SFE");
    ccaAbbr.set("media-contributions", "SPE-MDC");
    ccaAbbr.set("fokrv", "SPE-FOKRV");
    ccaAbbr.set("jco-participants", "SPE-JCOP");
    ccaAbbr.set("additional-contributions", "SPE-AC");
}

// stores the point array by pillars
const pointPillarDistribution = [0, 0, 0, 0, 0];
function addToPointPillar(arr: number[]) {
    for (var i = 0; i < 3; i++) {
        pointPillarDistribution[i] = Math.min(pointPillarDistribution[i] + arr[i], 40);
    }
    pointPillarDistribution[3] = Math.min(pointPillarDistribution[i] + arr[i], 16);
    pointPillarDistribution[4] += arr[4];
}

// stores the list of CCA profiles corresponding to the CCAs checked
class CCAProfile {
    ccaName: string | undefined;
    ccaRole: string;
    rolePointsArray: number[];

    constructor(ccaName: string, ccaRole: string, rolePointsArray: number[]) {
        this.ccaName = ccaName;
        this.ccaRole = ccaRole;
        this.rolePointsArray = rolePointsArray;
    }
}

const listOfCCAProfiles: CCAProfile[] = [];

// compute the point pillar array based on the checkbox results
function calculate() {
    // factoring in block member points first
    const blockMemberPointInputElement = document.getElementById("block-member-points");
    if (blockMemberPointInputElement instanceof HTMLInputElement) {
        pointPillarDistribution[4] += Number(blockMemberPointInputElement.value);
        listOfCCAProfiles.push(new CCAProfile("block", "member", [0, 0, 0, 0, Number(blockMemberPointInputElement.value)]));
    }

    // initialise the CCA map and retrieve the list of CCAs of the document in the form of <li>
    initialiseCCAMap();


    const listOfCCAs = Array.from(document.getElementsByClassName("point-computation-component"));

    listOfCCAs.forEach(cca => {
        const input = cca.children[2]; // get the input element
        const id = input.id;                       // get the CCA name
        const ccaObject = ccaMap.get(id);          // get the CCA object associated with this name
        const ccaAbbreviation = ccaAbbr.get(id);   // get the CCA Abbreviation for CCA Profile

        // skip all unchecked CCAs
        if (input instanceof HTMLInputElement && !input.checked) {
            return;
        }

        if (ccaObject instanceof Sports) { // handle Sports CCA logic
            const sportsObject = <Sports>ccaObject;
            const roleList = cca.children[3];       // get the role list (the select element)

            if (roleList instanceof HTMLSelectElement) {
                const role: string = roleList.value;                  // get the name of the role
                const rolePointsArray = sportsObject.getPoints(role); // get the point pillar array of the role
                
                if (rolePointsArray != undefined && ccaAbbreviation != undefined) {
                    addToPointPillar(rolePointsArray);                // compute the new array
                    listOfCCAProfiles.push(new CCAProfile(ccaAbbreviation, role, rolePointsArray.map(i => i))); // push the CCA profile to the list
                }
            }
        } else if (ccaObject instanceof Culture) { // handle Culture CCA logic
            const cultureObject = <Culture>ccaObject;
            const roleList = cca.children[3];

            if (roleList instanceof HTMLSelectElement) {
                const role: string = roleList.value;                  // get the name of the role
                const rolePointsArray = cultureObject.getPoints(role); // get the point pillar array of the role

                if (rolePointsArray != undefined && ccaAbbreviation != undefined) {
                    addToPointPillar(rolePointsArray);                // compute the new array
                    listOfCCAProfiles.push(new CCAProfile(ccaAbbreviation, role, rolePointsArray.map(i => i))); // push the CCA profile to the list
                }
            }
        } else if (ccaObject instanceof MajorComms) { // handle Major Committees CCA logic
            const majorCommsObject = <MajorComms>ccaObject;
            const roleList = cca.children[3];

            if (roleList instanceof HTMLSelectElement) {
                const role: string = roleList.value;                  // get the name of the role
                const rolePointsArray = majorCommsObject.getPoints(role); // get the point pillar array of the role

                if (rolePointsArray != undefined && ccaAbbreviation != undefined) {
                    addToPointPillar(rolePointsArray);                // compute the new array
                    listOfCCAProfiles.push(new CCAProfile(ccaAbbreviation, role, rolePointsArray.map(i => i))); // push the CCA profile to the list
                }
            } else {
                const rolePointsArray = majorCommsObject.getPoints("unavailable");

                if (rolePointsArray != undefined && ccaAbbreviation != undefined) {
                    addToPointPillar(rolePointsArray);                // compute the new array
                    listOfCCAProfiles.push(new CCAProfile(ccaAbbreviation, "unavailable", rolePointsArray.map(i => i))); // push the CCA profile to the list
                }
            }
        } else if (ccaObject instanceof MajorComms) { // handle Intermediate Committees CCA logic
            const intermediateCommsObject = <IntermediateComms>ccaObject;
            const roleList = cca.children[3];

            if (roleList instanceof HTMLSelectElement) {
                const role: string = roleList.value;                  // get the name of the role
                const rolePointsArray = intermediateCommsObject.getPoints(role); // get the point pillar array of the role

                if (rolePointsArray != undefined && ccaAbbreviation != undefined) {
                    addToPointPillar(rolePointsArray);                // compute the new array
                    listOfCCAProfiles.push(new CCAProfile(ccaAbbreviation, role, rolePointsArray.map(i => i))); // push the CCA profile to the list
                }
            } 
        } else if (ccaObject instanceof MinorComms) { // handle Minor Committees CCA logic
            const minorCommsObject = <MinorComms>ccaObject;
            const roleList = cca.children[3];

            if (roleList instanceof HTMLSelectElement) {
                const role: string = roleList.value;                  // get the name of the role
                const rolePointsArray = minorCommsObject.getPoints(role); // get the point pillar array of the role

                if (rolePointsArray != undefined && ccaAbbreviation != undefined) {
                    addToPointPillar(rolePointsArray);                // compute the new array
                    listOfCCAProfiles.push(new CCAProfile(ccaAbbreviation, role, rolePointsArray.map(i => i))); // push the CCA profile to the list
                }
            } 
        } else if (ccaObject instanceof SpecialComms) { // handle Special Committees CCA logic
            const specialCommsObject = <SpecialComms>ccaObject;
            const roleList = cca.children[3];

            if (roleList instanceof HTMLSelectElement) {
                const role: string = roleList.value;                  // get the name of the role
                const rolePointsArray = specialCommsObject.getPoints(role); // get the point pillar array of the role

                if (rolePointsArray != undefined && ccaAbbreviation != undefined) {
                    addToPointPillar(rolePointsArray);                // compute the new array
                    listOfCCAProfiles.push(new CCAProfile(ccaAbbreviation, role, rolePointsArray.map(i => i))); // push the CCA profile to the list
                }
            } else {
                const rolePointsArray = specialCommsObject.getPoints("unavailable");

                if (rolePointsArray != undefined && ccaAbbreviation != undefined) {
                    addToPointPillar(rolePointsArray);                // compute the new array
                    listOfCCAProfiles.push(new CCAProfile(ccaAbbreviation, "unavailable", rolePointsArray.map(i => i))); // push the CCA profile to the list
                }
            }
        } else if (ccaObject instanceof OriComms) { // handle Orientation Programme Committees CCA logic
            const oriCommsObject = <OriComms>ccaObject;
            const roleList = cca.children[3];

            if (roleList instanceof HTMLSelectElement) {
                const role: string = roleList.value;                  // get the name of the role
                const rolePointsArray = oriCommsObject.getPoints(role); // get the point pillar array of the role

                if (rolePointsArray != undefined && ccaAbbreviation != undefined) {
                    addToPointPillar(rolePointsArray);                // compute the new array
                    listOfCCAProfiles.push(new CCAProfile(ccaAbbreviation, role, rolePointsArray.map(i => i))); // push the CCA profile to the list
                }
            } else {
                const rolePointsArray = oriCommsObject.getPoints("unavailable");

                if (rolePointsArray != undefined && ccaAbbreviation != undefined) {
                    addToPointPillar(rolePointsArray);                // compute the new array
                    listOfCCAProfiles.push(new CCAProfile(ccaAbbreviation, "unavailable", rolePointsArray.map(i => i))); // push the CCA profile to the list
                }
            }
        } else if (ccaObject instanceof MediaComms) { // handle Media Committees CCA logic
            const mediaCommsObject = <MediaComms>ccaObject;
            const roleList = cca.children[3];

            if (roleList instanceof HTMLSelectElement) {
                const role: string = roleList.value;                  // get the name of the role
                const rolePointsArray = mediaCommsObject.getPoints(role); // get the point pillar array of the role

                var copyOfRolePointsArray: number[];

                if (rolePointsArray != undefined && ccaAbbreviation != undefined) {
                    // handle the assignment-based points logic
                    copyOfRolePointsArray = rolePointsArray.map(i => i);

                    const assignmentLabel = cca.children[2];
                    if (assignmentLabel instanceof HTMLLabelElement) {
                        const assignmentInput = assignmentLabel.children[0];

                        if (assignmentInput instanceof HTMLInputElement) {
                            const assignmentPoints = Number(assignmentInput.value);
                            copyOfRolePointsArray[2] += assignmentPoints;
                        }
                    }

                    addToPointPillar(copyOfRolePointsArray);                // compute the new array
                    listOfCCAProfiles.push(new CCAProfile(ccaAbbreviation, role, copyOfRolePointsArray)); // push the CCA profile to the list
                }
            } else {
                const rolePointsArray = mediaCommsObject.getPoints("unavailable");

                if (rolePointsArray != undefined && ccaAbbreviation != undefined) {
                    addToPointPillar(rolePointsArray);
                    listOfCCAProfiles.push(new CCAProfile(ccaAbbreviation, "unavailable", rolePointsArray.map(i => i)))
                }
            }
        } else if (ccaObject instanceof SpecialContributions) { // handle Media Committees CCA logic
            const specialContributionsObject = <SpecialContributions>ccaObject;
            const rolePointsArray = specialContributionsObject.getPoints("unavailable");

            if (rolePointsArray != undefined && ccaAbbreviation != undefined) {
                const copyOfRolePointsArray = rolePointsArray.map(i => i);

                // split into two cases where the CCA has custom points or fixed points
                const pointInput = document.getElementById(id + "-points");
                if (pointInput instanceof HTMLInputElement) {
                    const pointValue = Number(pointInput.value);
                    copyOfRolePointsArray[4] += pointValue;
                }

                addToPointPillar(copyOfRolePointsArray);                // compute the new array
                listOfCCAProfiles.push(new CCAProfile(ccaAbbreviation, "unavailable", copyOfRolePointsArray)); // push the CCA profile to the list
            }
        } else {
            return;
        }
    });

    return pointPillarDistribution;
}

function addElementToCCAPointList(profile: CCAProfile) {
    if (profile.ccaName == undefined || profile.ccaRole == undefined || profile.rolePointsArray == undefined) {
        return;
    }

    const newTdElement = document.createElement("tr");

    const ccaNameDiv = document.createElement("td");
    ccaNameDiv.setAttribute('class', 'cca-td-name');
    ccaNameDiv.appendChild(document.createTextNode(profile.ccaName.toUpperCase()));

    const ccaRole = document.createElement("td");
    ccaRole.setAttribute('class', 'cca-td-role');
    ccaRole.appendChild(document.createTextNode(profile.ccaRole.toUpperCase()));

    const ccaPoints = document.createElement("td");
    ccaPoints.setAttribute('class', 'cca-td-points');
    ccaPoints.appendChild(document.createTextNode(profile.rolePointsArray.reduce((acc, num) => acc + num, 0).toString()));
    
    newTdElement.append(ccaNameDiv, ccaRole, ccaPoints);

    const table = document.getElementById("cca-points-list");
    if (table instanceof HTMLTableElement) {
        table.appendChild(newTdElement);
    }
}

function getPointBreakdownAccordingToCCAs() {
    listOfCCAProfiles.forEach(addElementToCCAPointList);
}

function outputToPoints(func: () => number[]) {
    const points = document.getElementsByClassName("point");
    if (points != null) {
        points[0].innerHTML = pointPillarDistribution.reduce((accumulator, curr) => accumulator + curr, 0).toString();
        
        for (let i = 1; i < 6; i++) {
            points[i].innerHTML = pointPillarDistribution[i - 1].toString();
        }
    }
}

var hasCalculated: boolean = false; // check if the points calculation has been performed
var isAboutPointsCounterOn = false;

function toggleAboutPointsCounter() {
    const about = document.getElementsByClassName("about-points-allocation-tag")[0];

    if (!(about instanceof HTMLElement)) {
        return;
    }

    if (isAboutPointsCounterOn) {
        isAboutPointsCounterOn = false;
        about.style.transform = "translateY(-500vh)";
    } else {
        isAboutPointsCounterOn = true;
        about.style.transform = "translateY(0vh)";
    }
}

function outputToResults() {
    if (!hasCalculated) { // Enter -> trigger calculation
        hasCalculated = true;

        try {
            outputToPoints(calculate);
            getPointBreakdownAccordingToCCAs();
        } catch (error) {
            error instanceof Error ? outputToDummy(error.message) : outputToDummy("WTF???");
        }

        outputToDummy(1111);

        const selection = document.getElementById("selection");
        if (selection != null) {
            selection.style.pointerEvents = "none";
            selection.style.filter = "blur(3px)";
        }
    }
}

function outputToDummy(content: any) {
    const dummy = document.getElementById("dummy");

    if (dummy instanceof HTMLDivElement) {
        dummy.innerHTML = content.toString();
    }
}

// add all event listeners

document.addEventListener('keydown', event => {
    if (event.key === 'Enter') { // Enter -> trigger calculation
       outputToResults();
    } else if (event.key === "q") { // Q -> toggle About Points Counter
        toggleAboutPointsCounter();
    }
})

document.addEventListener('click', event => {
    const target = event.target;
    if (target instanceof HTMLElement 
        && !target.closest('.about-points-allocation-tag') 
        && !target.closest('.about-points-allocation-button')
        && isAboutPointsCounterOn) {
            toggleAboutPointsCounter();
    }
})