// each role of a CCA will have an array of points in the format of 
// [sports, culture, comms, leadership, special]
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// ------------------------------------------------------------------------
// initialise a new map that maps from id-name to corresponding CCA classes
// and a map that maps from the CCA name to its abbreviations -------------
// ------------------------------------------------------------------------
var ccaMap = new Map();
var ccaAbbr = new Map();
var CCA = /** @class */ (function () {
    function CCA(name, ccaTag) {
        this.name = name;
        this.ccaTag = ccaTag;
        this.rolePointMap = new Map();
    }
    CCA.prototype.getPoints = function (role) {
        return this.rolePointMap.has(role)
            ? this.rolePointMap.get(role)
            : [0, 0, 0, 0, 0];
    };
    CCA.prototype.getCCAClassification = function () {
        return this.ccaTag;
    };
    return CCA;
}());
// --------------------------------
// sports CCA logic----------------
// --------------------------------
var Sports = /** @class */ (function (_super) {
    __extends(Sports, _super);
    function Sports(name) {
        var _this = _super.call(this, name, "sports") || this;
        _this.rolePointMap = new Map();
        _this.rolePointMap.set("captain", [16, 0, 0, 4, 0]);
        _this.rolePointMap.set("co-captain", [16, 0, 0, 3, 0]);
        _this.rolePointMap.set("vice-captain", [16, 0, 0, 2, 0]);
        _this.rolePointMap.set("member", [10, 0, 0, 0, 0]);
        _this.rolePointMap.set("training-team", [16, 0, 0, 0, 0]);
        _this.rolePointMap.set("team-manager", [0, 0, 0, 3, 0]);
        return _this;
    }
    return Sports;
}(CCA));
// --------------------------------
// culture CCA logic---------------
// --------------------------------
var Culture = /** @class */ (function (_super) {
    __extends(Culture, _super);
    function Culture(name) {
        return _super.call(this, name, "culture") || this;
    }
    return Culture;
}(CCA));
// for Acapella, Inspire, Rockers and Choir
var AIRC = /** @class */ (function (_super) {
    __extends(AIRC, _super);
    function AIRC(name) {
        var _this = _super.call(this, name) || this;
        _this.rolePointMap = new Map();
        _this.rolePointMap.set("chairperson", [0, 12, 0, 4, 0]);
        _this.rolePointMap.set("vice-chairperson", [0, 12, 0, 2, 0]);
        _this.rolePointMap.set("committee-member", [0, 12, 0, 1, 0]);
        _this.rolePointMap.set("member", [0, 12, 0, 0, 0]);
        return _this;
    }
    return AIRC;
}(Culture));
// for Dance
var Dance = /** @class */ (function (_super) {
    __extends(Dance, _super);
    function Dance() {
        var _this = _super.call(this, "dance") || this;
        _this.rolePointMap = new Map();
        _this.rolePointMap.set("chairperson", [0, 16, 0, 8, 0]);
        _this.rolePointMap.set("vice-chairperson", [0, 16, 0, 7, 0]);
        _this.rolePointMap.set("committee-member", [0, 16, 0, 6, 0]);
        _this.rolePointMap.set("member", [0, 20, 0, 0, 0]);
        return _this;
    }
    return Dance;
}(Culture));
// for Remix
var Remix = /** @class */ (function (_super) {
    __extends(Remix, _super);
    function Remix() {
        var _this = _super.call(this, "remix") || this;
        _this.rolePointMap = new Map();
        _this.rolePointMap.set("chairperson", [0, 9, 0, 6, 0]);
        _this.rolePointMap.set("vice-chairperson", [0, 9, 0, 4, 0]);
        _this.rolePointMap.set("member", [0, 11, 0, 0, 0]);
        return _this;
    }
    return Remix;
}(Culture));
// for Steppers
var Steppers = /** @class */ (function (_super) {
    __extends(Steppers, _super);
    function Steppers() {
        var _this = _super.call(this, "steppers") || this;
        _this.rolePointMap = new Map();
        _this.rolePointMap.set("chairperson", [17, 17, 0, 0, 0]);
        _this.rolePointMap.set("vice-chairperson", [16, 16, 0, 0, 0]);
        _this.rolePointMap.set("committee-member", [15, 15, 0, 6, 0]);
        _this.rolePointMap.set("member", [14, 14, 0, 0, 0]);
        return _this;
    }
    return Steppers;
}(Culture));
// for KR Hall Production
var HallProduction = /** @class */ (function (_super) {
    __extends(HallProduction, _super);
    function HallProduction() {
        var _this = _super.call(this, "krhp") || this;
        _this.rolePointMap = new Map();
        _this.rolePointMap.set("cast-performer", [0, 8, 0, 0, 0]);
        _this.rolePointMap.set("main-cast", [0, 10, 0, 0, 0]);
        return _this;
    }
    return HallProduction;
}(Culture));
// --------------------------------
// major committees logic----------
// --------------------------------
// for most comms
var MajorComms = /** @class */ (function (_super) {
    __extends(MajorComms, _super);
    function MajorComms(name) {
        var _this = _super.call(this, name, "major-committees") || this;
        _this.rolePointMap = new Map();
        _this.rolePointMap.set("chairperson", [0, 0, 10, 4, 0]);
        _this.rolePointMap.set("co-chairperson", [0, 0, 10, 3, 0]);
        _this.rolePointMap.set("vice-chairperson", [0, 0, 10, 2, 0]);
        _this.rolePointMap.set("member", [0, 0, 10, 0, 0]);
        return _this;
    }
    return MajorComms;
}(CCA));
// for Alumni Relations and Engagement Committee and Welfare Committee
var AREWelfare = /** @class */ (function (_super) {
    __extends(AREWelfare, _super);
    function AREWelfare(name) {
        var _this = _super.call(this, name) || this;
        _this.rolePointMap = new Map();
        _this.rolePointMap.set("chairperson", [0, 0, 12, 4, 0]);
        _this.rolePointMap.set("vice-chairperson", [0, 0, 12, 2, 0]);
        _this.rolePointMap.set("member", [0, 0, 12, 0, 0]);
        return _this;
    }
    return AREWelfare;
}(MajorComms));
// for JCRC Finance Executives
var JCRCFinanceExecutive = /** @class */ (function (_super) {
    __extends(JCRCFinanceExecutive, _super);
    function JCRCFinanceExecutive() {
        return _super.call(this, "jcrc-finance-exec") || this;
    }
    JCRCFinanceExecutive.prototype.getPoints = function (role) {
        return [0, 0, 0, 12, 0];
    };
    return JCRCFinanceExecutive;
}(MajorComms));
// for JC Outreach Executives
var JCOExecutive = /** @class */ (function (_super) {
    __extends(JCOExecutive, _super);
    function JCOExecutive() {
        return _super.call(this, "jco-exec") || this;
    }
    JCOExecutive.prototype.getPoints = function (role) {
        return [0, 0, 0, 8, 0];
    };
    return JCOExecutive;
}(MajorComms));
// for Culture Executives
var CultureExecutive = /** @class */ (function (_super) {
    __extends(CultureExecutive, _super);
    function CultureExecutive() {
        return _super.call(this, "culture-exec") || this;
    }
    CultureExecutive.prototype.getPoints = function (role) {
        return [0, 0, 0, 4, 0];
    };
    return CultureExecutive;
}(MajorComms));
// --------------------------------
// intermediate committees logic---
// --------------------------------
var IntermediateComms = /** @class */ (function (_super) {
    __extends(IntermediateComms, _super);
    function IntermediateComms(name) {
        var _this = _super.call(this, name, "intermediate-committees") || this;
        _this.rolePointMap = new Map();
        _this.rolePointMap.set("chairperson", [0, 0, 8, 4, 0]);
        _this.rolePointMap.set("co-chairperson", [0, 0, 8, 3, 0]);
        _this.rolePointMap.set("vice-chairperson", [0, 0, 8, 2, 0]);
        _this.rolePointMap.set("member", [0, 0, 8, 0, 0]);
        return _this;
    }
    return IntermediateComms;
}(CCA));
// --------------------------------
// minor committees logic----------
// --------------------------------
var MinorComms = /** @class */ (function (_super) {
    __extends(MinorComms, _super);
    function MinorComms(name) {
        var _this = _super.call(this, name, "minor-committees") || this;
        _this.rolePointMap = new Map();
        _this.rolePointMap.set("chairperson", [0, 0, 6, 4, 0]);
        _this.rolePointMap.set("co-chairperson", [0, 0, 6, 3, 0]);
        _this.rolePointMap.set("vice-chairperson", [0, 0, 6, 2, 0]);
        _this.rolePointMap.set("member", [0, 0, 6, 0, 0]);
        return _this;
    }
    return MinorComms;
}(CCA));
// --------------------------------
// special committees logic--------
// --------------------------------
var SpecialComms = /** @class */ (function (_super) {
    __extends(SpecialComms, _super);
    function SpecialComms(name) {
        return _super.call(this, name, "special-committees") || this;
    }
    return SpecialComms;
}(CCA));
// for Junior Common Room Committee
var JCRC = /** @class */ (function (_super) {
    __extends(JCRC, _super);
    function JCRC() {
        return _super.call(this, "jcrc") || this;
    }
    JCRC.prototype.getPoints = function (role) {
        return [0, 0, 0, 0, 10000];
    };
    return JCRC;
}(SpecialComms));
// for Block Committee
var BlockComms = /** @class */ (function (_super) {
    __extends(BlockComms, _super);
    function BlockComms() {
        var _this = _super.call(this, "block") || this;
        _this.rolePointMap = new Map();
        _this.rolePointMap.set("block-head", [0, 0, 0, 0, 10000]);
        _this.rolePointMap.set("member", [0, 0, 10, 6, 0]);
        return _this;
    }
    return BlockComms;
}(SpecialComms));
// for Hall Promotion Board
var HPB = /** @class */ (function (_super) {
    __extends(HPB, _super);
    function HPB() {
        var _this = _super.call(this, "hpb") || this;
        _this.rolePointMap = new Map();
        _this.rolePointMap.set("chairperson", [0, 0, 18, 4, 0]);
        _this.rolePointMap.set("vice-chairperson", [0, 0, 18, 2, 0]);
        _this.rolePointMap.set("member", [0, 0, 18, 0, 0]);
        return _this;
    }
    return HPB;
}(SpecialComms));
// for KR Dance Production
var KRDP = /** @class */ (function (_super) {
    __extends(KRDP, _super);
    function KRDP() {
        var _this = _super.call(this, "krdp") || this;
        _this.rolePointMap = new Map();
        _this.rolePointMap.set("producer", [0, 0, 12, 4, 0]);
        _this.rolePointMap.set("director", [0, 0, 12, 4, 0]);
        _this.rolePointMap.set("assistant-producer", [0, 0, 12, 2, 0]);
        _this.rolePointMap.set("assistant-director", [0, 0, 12, 2, 0]);
        _this.rolePointMap.set("executives", [0, 0, 12, 2, 0]);
        _this.rolePointMap.set("stage-manager", [0, 0, 10, 2, 0]);
        _this.rolePointMap.set("media-specialist", [0, 0, 10, 2, 0]);
        _this.rolePointMap.set("publicity-team", [0, 0, 8, 0, 0]);
        _this.rolePointMap.set("finance-team", [0, 0, 8, 0, 0]);
        _this.rolePointMap.set("stage-crew", [0, 0, 8, 0, 0]);
        return _this;
    }
    return KRDP;
}(SpecialComms));
// ----------------------------------------------
// orientation programme committees logic--------
// ----------------------------------------------
var OriComms = /** @class */ (function (_super) {
    __extends(OriComms, _super);
    function OriComms(name) {
        return _super.call(this, name, "orientation-committee") || this;
    }
    return OriComms;
}(CCA));
// for no orientation committee 
var NoOriComms = /** @class */ (function (_super) {
    __extends(NoOriComms, _super);
    function NoOriComms() {
        return _super.call(this, "no-orientation-committees") || this;
    }
    NoOriComms.prototype.getPoints = function (role) {
        return [0, 0, 0, 0, 0];
    };
    return NoOriComms;
}(OriComms));
// for Receive and Give Committee
var RAG = /** @class */ (function (_super) {
    __extends(RAG, _super);
    function RAG() {
        var _this = _super.call(this, "rag") || this;
        _this.rolePointMap = new Map();
        _this.rolePointMap.set("project-director", [0, 0, 9, 2, 0]);
        _this.rolePointMap.set("vice-chairperson", [0, 0, 9, 1, 0]);
        _this.rolePointMap.set("member", [0, 0, 9, 0, 0]);
        return _this;
    }
    return RAG;
}(OriComms));
// for FLAG Committee
var FLAG = /** @class */ (function (_super) {
    __extends(FLAG, _super);
    function FLAG() {
        var _this = _super.call(this, "flag") || this;
        _this.rolePointMap = new Map();
        _this.rolePointMap.set("chairperson", [0, 0, 10, 2, 0]);
        _this.rolePointMap.set("vice-chairperson", [0, 0, 10, 1, 0]);
        _this.rolePointMap.set("member", [0, 0, 10, 0, 0]);
        return _this;
    }
    return FLAG;
}(OriComms));
// for FWOC Committee
var FWOC = /** @class */ (function (_super) {
    __extends(FWOC, _super);
    function FWOC() {
        var _this = _super.call(this, "fwoc") || this;
        _this.rolePointMap = new Map();
        _this.rolePointMap.set("chairperson", [0, 0, 9, 2, 0]);
        _this.rolePointMap.set("vice-chairperson", [0, 0, 9, 1, 0]);
        _this.rolePointMap.set("member", [0, 0, 9, 0, 0]);
        return _this;
    }
    return FWOC;
}(OriComms));
// ------------------------------
// media committees logic--------
// ------------------------------
var MediaComms = /** @class */ (function (_super) {
    __extends(MediaComms, _super);
    function MediaComms(name) {
        return _super.call(this, name, "media-committees") || this;
    }
    return MediaComms;
}(CCA));
// for KRaphics, Video Production Team, Photo Committee and Technical Support Unit
var KVPT = /** @class */ (function (_super) {
    __extends(KVPT, _super);
    function KVPT(name) {
        var _this = _super.call(this, name) || this;
        _this.rolePointMap = new Map();
        _this.rolePointMap.set("chairperson", [0, 0, 4, 4, 0]);
        _this.rolePointMap.set("vice-chairperson", [0, 0, 4, 2, 0]);
        _this.rolePointMap.set("member", [0, 0, 4, 0, 0]);
        return _this;
    }
    return KVPT;
}(MediaComms));
// for KReporters 
var KReporters = /** @class */ (function (_super) {
    __extends(KReporters, _super);
    function KReporters() {
        var _this = _super.call(this, "kreporters") || this;
        _this.rolePointMap = new Map();
        _this.rolePointMap.set("chairperson", [0, 0, 0, 4, 0]);
        _this.rolePointMap.set("vice-chairperson", [0, 0, 0, 2, 0]);
        _this.rolePointMap.set("member", [0, 0, 0, 0, 0]);
        return _this;
    }
    return KReporters;
}(MediaComms));
// for Hall Annual Magazine
var HAM = /** @class */ (function (_super) {
    __extends(HAM, _super);
    function HAM() {
        var _this = _super.call(this, "ham") || this;
        _this.rolePointMap = new Map();
        _this.rolePointMap.set("co-editor", [0, 0, 14, 0, 0]);
        return _this;
    }
    return HAM;
}(MediaComms));
// ------------------------------
// special contributions logic---
// ------------------------------
var SpecialContributions = /** @class */ (function (_super) {
    __extends(SpecialContributions, _super);
    function SpecialContributions(name) {
        return _super.call(this, name, "special-contributions") || this;
    }
    return SpecialContributions;
}(CCA));
// for RAG Floaters
var RAGFloaters = /** @class */ (function (_super) {
    __extends(RAGFloaters, _super);
    function RAGFloaters() {
        return _super.call(this, "rag-floaters") || this;
    }
    RAGFloaters.prototype.getPoints = function (role) {
        return [0, 0, 0, 0, 6];
    };
    return RAGFloaters;
}(SpecialContributions));
// for RAG Dancers
var RAGDancers = /** @class */ (function (_super) {
    __extends(RAGDancers, _super);
    function RAGDancers() {
        return _super.call(this, "rag-dancers") || this;
    }
    RAGDancers.prototype.getPoints = function (role) {
        return [0, 0, 0, 0, 6];
    };
    return RAGDancers;
}(SpecialContributions));
// for emcees
var Emcees = /** @class */ (function (_super) {
    __extends(Emcees, _super);
    function Emcees() {
        var _this = _super.call(this, "emcees") || this;
        _this.rolePointMap = new Map();
        _this.rolePointMap.set("emcees", [0, 0, 0, 0, 0]);
        return _this;
    }
    Emcees.prototype.getPoints = function (role) {
        return this.rolePointMap.get("emcees");
    };
    return Emcees;
}(SpecialContributions));
// for emcees
var Emcee = /** @class */ (function (_super) {
    __extends(Emcee, _super);
    function Emcee() {
        var _this = _super.call(this, "emcees") || this;
        _this.rolePointMap = new Map();
        _this.rolePointMap.set("emcees", [0, 0, 0, 0, 0]);
        return _this;
    }
    Emcee.prototype.getPoints = function (role) {
        return this.rolePointMap.get("emcees");
    };
    return Emcee;
}(SpecialContributions));
// for Camp Blue Blood facilitators
var CBBFaciltator = /** @class */ (function (_super) {
    __extends(CBBFaciltator, _super);
    function CBBFaciltator() {
        var _this = _super.call(this, "cbb-facilitators") || this;
        _this.rolePointMap = new Map();
        _this.rolePointMap.set("cbb-facilitators", [0, 0, 0, 0, 0]);
        return _this;
    }
    CBBFaciltator.prototype.getPoints = function (role) {
        return this.rolePointMap.get("cbb-facilitators");
    };
    return CBBFaciltator;
}(SpecialContributions));
// for FWOC seniors
var FWOCSenior = /** @class */ (function (_super) {
    __extends(FWOCSenior, _super);
    function FWOCSenior() {
        var _this = _super.call(this, "fwoc-seniors") || this;
        _this.rolePointMap = new Map();
        _this.rolePointMap.set("fwoc-seniors", [0, 0, 0, 0, 0]);
        return _this;
    }
    FWOCSenior.prototype.getPoints = function (role) {
        return this.rolePointMap.get("fwoc-seniors");
    };
    return FWOCSenior;
}(SpecialContributions));
// for CBB/FWOC Safety Personnel
var CFSP = /** @class */ (function (_super) {
    __extends(CFSP, _super);
    function CFSP() {
        var _this = _super.call(this, "cbb-fwoc-safety-personnel") || this;
        _this.rolePointMap = new Map();
        _this.rolePointMap.set("cbb-fwoc-safety-personnel", [0, 0, 0, 0, 0]);
        return _this;
    }
    CFSP.prototype.getPoints = function (role) {
        return this.rolePointMap.get("cbb-fwoc-safety-personnel");
    };
    return CFSP;
}(SpecialContributions));
// for Stage Crews
var StageCrew = /** @class */ (function (_super) {
    __extends(StageCrew, _super);
    function StageCrew() {
        var _this = _super.call(this, "stage-crew") || this;
        _this.rolePointMap = new Map();
        _this.rolePointMap.set("stage-crew", [0, 0, 0, 0, 0]);
        return _this;
    }
    StageCrew.prototype.getPoints = function (role) {
        return this.rolePointMap.get("stage-crew");
    };
    return StageCrew;
}(SpecialContributions));
// for Elections Committee members
var ECM = /** @class */ (function (_super) {
    __extends(ECM, _super);
    function ECM() {
        return _super.call(this, "ecm") || this;
    }
    ECM.prototype.getPoints = function (role) {
        return [0, 0, 0, 0, 3];
    };
    return ECM;
}(SpecialContributions));
// for Merit Allocation Board members 
var MAB = /** @class */ (function (_super) {
    __extends(MAB, _super);
    function MAB() {
        return _super.call(this, "mab") || this;
    }
    MAB.prototype.getPoints = function (role) {
        return [0, 0, 0, 0, 4];
    };
    return MAB;
}(SpecialContributions));
// for Points Allocation Board members 
var PAB = /** @class */ (function (_super) {
    __extends(PAB, _super);
    function PAB() {
        return _super.call(this, "pab") || this;
    }
    PAB.prototype.getPoints = function (role) {
        return [0, 0, 0, 0, 4];
    };
    return PAB;
}(SpecialContributions));
// for Open Day Ambassadors 
var ODA = /** @class */ (function (_super) {
    __extends(ODA, _super);
    function ODA() {
        return _super.call(this, "oda") || this;
    }
    ODA.prototype.getPoints = function (role) {
        return [0, 0, 0, 0, 1];
    };
    return ODA;
}(SpecialContributions));
// for Star2Burst Performers
var S2B = /** @class */ (function (_super) {
    __extends(S2B, _super);
    function S2B() {
        return _super.call(this, "s2b") || this;
    }
    S2B.prototype.getPoints = function (role) {
        return [0, 0, 0, 0, 2];
    };
    return S2B;
}(SpecialContributions));
// for Sports Student Coach for Own Gender
var CoachOwnGender = /** @class */ (function (_super) {
    __extends(CoachOwnGender, _super);
    function CoachOwnGender() {
        return _super.call(this, "coach-own-gender") || this;
    }
    CoachOwnGender.prototype.getPoints = function (role) {
        return [0, 0, 0, 0, 4];
    };
    return CoachOwnGender;
}(SpecialContributions));
// for Sports Student Coach for Opposite Gender
var CoachOppositeGender = /** @class */ (function (_super) {
    __extends(CoachOppositeGender, _super);
    function CoachOppositeGender() {
        return _super.call(this, "coach-opposite-gender") || this;
    }
    CoachOppositeGender.prototype.getPoints = function (role) {
        return [0, 0, 0, 0, 8];
    };
    return CoachOppositeGender;
}(SpecialContributions));
// for Summer Finance Executives
var SFE = /** @class */ (function (_super) {
    __extends(SFE, _super);
    function SFE() {
        return _super.call(this, "summer-finance-exec") || this;
    }
    SFE.prototype.getPoints = function (role) {
        return [0, 0, 0, 0, 3];
    };
    return SFE;
}(SpecialContributions));
// for Significant Media Contribution
var MediaContributions = /** @class */ (function (_super) {
    __extends(MediaContributions, _super);
    function MediaContributions() {
        return _super.call(this, "media-contributions") || this;
    }
    MediaContributions.prototype.getPoints = function (role) {
        return [0, 0, 0, 0, 5];
    };
    return MediaContributions;
}(SpecialContributions));
// for Friends of KRV
var FoKRV = /** @class */ (function (_super) {
    __extends(FoKRV, _super);
    function FoKRV() {
        var _this = _super.call(this, "fokrv") || this;
        _this.rolePointMap = new Map();
        _this.rolePointMap.set("fokrv", [0, 0, 0, 0, 0]);
        return _this;
    }
    FoKRV.prototype.getPoints = function (role) {
        return this.rolePointMap.get("fokrv");
    };
    return FoKRV;
}(SpecialContributions));
// for JC Outreach perticipants
var JCOParticipants = /** @class */ (function (_super) {
    __extends(JCOParticipants, _super);
    function JCOParticipants() {
        return _super.call(this, "jco-participants") || this;
    }
    JCOParticipants.prototype.getPoints = function (role) {
        return [0, 0, 0, 0, 2];
    };
    return JCOParticipants;
}(SpecialContributions));
// for Additional Contributions
var AdditionalContributions = /** @class */ (function (_super) {
    __extends(AdditionalContributions, _super);
    function AdditionalContributions() {
        var _this = _super.call(this, "additional-contributions") || this;
        _this.rolePointMap = new Map();
        _this.rolePointMap.set("additional-contributions", [0, 0, 0, 0, 0]);
        return _this;
    }
    AdditionalContributions.prototype.getPoints = function (role) {
        return this.rolePointMap.get("additional-contributions");
    };
    return AdditionalContributions;
}(SpecialContributions));
// ------------------------------------------------------
// WEBSITE LOGIC ----------------------------------------
// ------------------------------------------------------
// compute the points
var hasInitialisedCCAMap = false;
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
var pointPillarDistribution = [0, 0, 0, 0, 0];
function addToPointPillar(arr) {
    for (var i = 0; i < 3; i++) {
        pointPillarDistribution[i] = Math.min(pointPillarDistribution[i] + arr[i], 40);
    }
    pointPillarDistribution[3] = Math.min(pointPillarDistribution[i] + arr[i], 16);
    pointPillarDistribution[4] += arr[4];
}
// stores the list of CCA profiles corresponding to the CCAs checked
var CCAProfile = /** @class */ (function () {
    function CCAProfile(ccaName, ccaRole, rolePointsArray) {
        this.ccaName = ccaName;
        this.ccaRole = ccaRole;
        this.rolePointsArray = rolePointsArray;
    }
    return CCAProfile;
}());
var listOfCCAProfiles = [];
// compute the point pillar array based on the checkbox results
function calculate() {
    // factoring in block member points first
    var blockMemberPointInputElement = document.getElementById("block-member-points");
    if (blockMemberPointInputElement instanceof HTMLInputElement) {
        pointPillarDistribution[4] += Number(blockMemberPointInputElement.value);
        listOfCCAProfiles.push(new CCAProfile("block", "member", [0, 0, 0, 0, Number(blockMemberPointInputElement.value)]));
    }
    // initialise the CCA map and retrieve the list of CCAs of the document in the form of <li>
    initialiseCCAMap();
    var listOfCCAs = Array.from(document.getElementsByClassName("point-computation-component"));
    listOfCCAs.forEach(function (cca) {
        var input = cca.children[2]; // get the input element
        var id = input.id; // get the CCA name
        var ccaObject = ccaMap.get(id); // get the CCA object associated with this name
        var ccaAbbreviation = ccaAbbr.get(id); // get the CCA Abbreviation for CCA Profile
        // skip all unchecked CCAs
        if (input instanceof HTMLInputElement && !input.checked) {
            return;
        }
        if (ccaObject instanceof Sports) { // handle Sports CCA logic
            var sportsObject = ccaObject;
            var roleList = cca.children[3]; // get the role list (the select element)
            if (roleList instanceof HTMLSelectElement) {
                var role = roleList.value; // get the name of the role
                var rolePointsArray = sportsObject.getPoints(role); // get the point pillar array of the role
                if (rolePointsArray != undefined && ccaAbbreviation != undefined) {
                    addToPointPillar(rolePointsArray); // compute the new array
                    listOfCCAProfiles.push(new CCAProfile(ccaAbbreviation, role, rolePointsArray.map(function (i) { return i; }))); // push the CCA profile to the list
                }
            }
        }
        else if (ccaObject instanceof Culture) { // handle Culture CCA logic
            var cultureObject = ccaObject;
            var roleList = cca.children[3];
            if (roleList instanceof HTMLSelectElement) {
                var role = roleList.value; // get the name of the role
                var rolePointsArray = cultureObject.getPoints(role); // get the point pillar array of the role
                if (rolePointsArray != undefined && ccaAbbreviation != undefined) {
                    addToPointPillar(rolePointsArray); // compute the new array
                    listOfCCAProfiles.push(new CCAProfile(ccaAbbreviation, role, rolePointsArray.map(function (i) { return i; }))); // push the CCA profile to the list
                }
            }
        }
        else if (ccaObject instanceof MajorComms) { // handle Major Committees CCA logic
            var majorCommsObject = ccaObject;
            var roleList = cca.children[3];
            if (roleList instanceof HTMLSelectElement) {
                var role = roleList.value; // get the name of the role
                var rolePointsArray = majorCommsObject.getPoints(role); // get the point pillar array of the role
                if (rolePointsArray != undefined && ccaAbbreviation != undefined) {
                    addToPointPillar(rolePointsArray); // compute the new array
                    listOfCCAProfiles.push(new CCAProfile(ccaAbbreviation, role, rolePointsArray.map(function (i) { return i; }))); // push the CCA profile to the list
                }
            }
            else {
                var rolePointsArray = majorCommsObject.getPoints("unavailable");
                if (rolePointsArray != undefined && ccaAbbreviation != undefined) {
                    addToPointPillar(rolePointsArray); // compute the new array
                    listOfCCAProfiles.push(new CCAProfile(ccaAbbreviation, "unavailable", rolePointsArray.map(function (i) { return i; }))); // push the CCA profile to the list
                }
            }
        }
        else if (ccaObject instanceof MajorComms) { // handle Intermediate Committees CCA logic
            var intermediateCommsObject = ccaObject;
            var roleList = cca.children[3];
            if (roleList instanceof HTMLSelectElement) {
                var role = roleList.value; // get the name of the role
                var rolePointsArray = intermediateCommsObject.getPoints(role); // get the point pillar array of the role
                if (rolePointsArray != undefined && ccaAbbreviation != undefined) {
                    addToPointPillar(rolePointsArray); // compute the new array
                    listOfCCAProfiles.push(new CCAProfile(ccaAbbreviation, role, rolePointsArray.map(function (i) { return i; }))); // push the CCA profile to the list
                }
            }
        }
        else if (ccaObject instanceof MinorComms) { // handle Minor Committees CCA logic
            var minorCommsObject = ccaObject;
            var roleList = cca.children[3];
            if (roleList instanceof HTMLSelectElement) {
                var role = roleList.value; // get the name of the role
                var rolePointsArray = minorCommsObject.getPoints(role); // get the point pillar array of the role
                if (rolePointsArray != undefined && ccaAbbreviation != undefined) {
                    addToPointPillar(rolePointsArray); // compute the new array
                    listOfCCAProfiles.push(new CCAProfile(ccaAbbreviation, role, rolePointsArray.map(function (i) { return i; }))); // push the CCA profile to the list
                }
            }
        }
        else if (ccaObject instanceof SpecialComms) { // handle Special Committees CCA logic
            var specialCommsObject = ccaObject;
            var roleList = cca.children[3];
            if (roleList instanceof HTMLSelectElement) {
                var role = roleList.value; // get the name of the role
                var rolePointsArray = specialCommsObject.getPoints(role); // get the point pillar array of the role
                if (rolePointsArray != undefined && ccaAbbreviation != undefined) {
                    addToPointPillar(rolePointsArray); // compute the new array
                    listOfCCAProfiles.push(new CCAProfile(ccaAbbreviation, role, rolePointsArray.map(function (i) { return i; }))); // push the CCA profile to the list
                }
            }
            else {
                var rolePointsArray = specialCommsObject.getPoints("unavailable");
                if (rolePointsArray != undefined && ccaAbbreviation != undefined) {
                    addToPointPillar(rolePointsArray); // compute the new array
                    listOfCCAProfiles.push(new CCAProfile(ccaAbbreviation, "unavailable", rolePointsArray.map(function (i) { return i; }))); // push the CCA profile to the list
                }
            }
        }
        else if (ccaObject instanceof OriComms) { // handle Orientation Programme Committees CCA logic
            var oriCommsObject = ccaObject;
            var roleList = cca.children[3];
            if (roleList instanceof HTMLSelectElement) {
                var role = roleList.value; // get the name of the role
                var rolePointsArray = oriCommsObject.getPoints(role); // get the point pillar array of the role
                if (rolePointsArray != undefined && ccaAbbreviation != undefined) {
                    addToPointPillar(rolePointsArray); // compute the new array
                    listOfCCAProfiles.push(new CCAProfile(ccaAbbreviation, role, rolePointsArray.map(function (i) { return i; }))); // push the CCA profile to the list
                }
            }
            else {
                var rolePointsArray = oriCommsObject.getPoints("unavailable");
                if (rolePointsArray != undefined && ccaAbbreviation != undefined) {
                    addToPointPillar(rolePointsArray); // compute the new array
                    listOfCCAProfiles.push(new CCAProfile(ccaAbbreviation, "unavailable", rolePointsArray.map(function (i) { return i; }))); // push the CCA profile to the list
                }
            }
        }
        else if (ccaObject instanceof MediaComms) { // handle Media Committees CCA logic
            var mediaCommsObject = ccaObject;
            var roleList = cca.children[3];
            if (roleList instanceof HTMLSelectElement) {
                var role = roleList.value; // get the name of the role
                var rolePointsArray = mediaCommsObject.getPoints(role); // get the point pillar array of the role
                var copyOfRolePointsArray;
                if (rolePointsArray != undefined && ccaAbbreviation != undefined) {
                    // handle the assignment-based points logic
                    copyOfRolePointsArray = rolePointsArray.map(function (i) { return i; });
                    var assignmentLabel = cca.children[2];
                    if (assignmentLabel instanceof HTMLLabelElement) {
                        var assignmentInput = assignmentLabel.children[0];
                        if (assignmentInput instanceof HTMLInputElement) {
                            var assignmentPoints = Number(assignmentInput.value);
                            copyOfRolePointsArray[2] += assignmentPoints;
                        }
                    }
                    addToPointPillar(copyOfRolePointsArray); // compute the new array
                    listOfCCAProfiles.push(new CCAProfile(ccaAbbreviation, role, copyOfRolePointsArray)); // push the CCA profile to the list
                }
            }
            else {
                var rolePointsArray = mediaCommsObject.getPoints("unavailable");
                if (rolePointsArray != undefined && ccaAbbreviation != undefined) {
                    addToPointPillar(rolePointsArray);
                    listOfCCAProfiles.push(new CCAProfile(ccaAbbreviation, "unavailable", rolePointsArray.map(function (i) { return i; })));
                }
            }
        }
        else if (ccaObject instanceof SpecialContributions) { // handle Media Committees CCA logic
            var specialContributionsObject = ccaObject;
            var rolePointsArray = specialContributionsObject.getPoints("unavailable");
            if (rolePointsArray != undefined && ccaAbbreviation != undefined) {
                var copyOfRolePointsArray_1 = rolePointsArray.map(function (i) { return i; });
                // split into two cases where the CCA has custom points or fixed points
                var pointInput = document.getElementById(id + "-points");
                if (pointInput instanceof HTMLInputElement) {
                    var pointValue = Number(pointInput.value);
                    copyOfRolePointsArray_1[4] += pointValue;
                }
                addToPointPillar(copyOfRolePointsArray_1); // compute the new array
                listOfCCAProfiles.push(new CCAProfile(ccaAbbreviation, "unavailable", copyOfRolePointsArray_1)); // push the CCA profile to the list
            }
        }
        else {
            return;
        }
    });
    return pointPillarDistribution;
}
function addElementToCCAPointList(profile) {
    if (profile.ccaName == undefined || profile.ccaRole == undefined || profile.rolePointsArray == undefined) {
        return;
    }
    var newTdElement = document.createElement("tr");
    var ccaNameDiv = document.createElement("td");
    ccaNameDiv.setAttribute('class', 'cca-td-name');
    ccaNameDiv.appendChild(document.createTextNode(profile.ccaName.toUpperCase()));
    var ccaRole = document.createElement("td");
    ccaRole.setAttribute('class', 'cca-td-role');
    ccaRole.appendChild(document.createTextNode(profile.ccaRole.toUpperCase()));
    var ccaPoints = document.createElement("td");
    ccaPoints.setAttribute('class', 'cca-td-points');
    ccaPoints.appendChild(document.createTextNode(profile.rolePointsArray.reduce(function (acc, num) { return acc + num; }, 0).toString()));
    newTdElement.append(ccaNameDiv, ccaRole, ccaPoints);
    var table = document.getElementById("cca-points-list");
    if (table instanceof HTMLTableElement) {
        table.appendChild(newTdElement);
    }
}
function getPointBreakdownAccordingToCCAs() {
    listOfCCAProfiles.forEach(addElementToCCAPointList);
}
function outputToPoints(func) {
    func();
    var points = document.getElementsByClassName("point");
    if (points != null) {
        points[0].innerHTML = pointPillarDistribution.reduce(function (accumulator, curr) { return accumulator + curr; }, 0).toString();
        for (var i = 1; i < 6; i++) {
            points[i].innerHTML = pointPillarDistribution[i - 1].toString();
        }
    }
}
var hasCalculated = false; // check if the points calculation has been performed
var isAboutPointsCounterOn = false;
function toggleAboutPointsCounter() {
    var about = document.getElementsByClassName("about-points-allocation-tag")[0];
    if (!(about instanceof HTMLElement)) {
        return;
    }
    if (isAboutPointsCounterOn) {
        isAboutPointsCounterOn = false;
        about.style.transform = "translateY(-500vh)";
    }
    else {
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
        }
        catch (error) {
            error instanceof Error ? outputToDummy(error.message) : outputToDummy("WTF???");
        }
        var selection = document.getElementById("selection");
        var results = document.getElementById("results");
        if (selection != null && results != null) {
            selection.style.pointerEvents = "none";
            selection.style.filter = "blur(7px)";
            if (window.innerWidth > 800) {
                selection.style.width = "35%";
                selection.style.maxWidth = "250px";
                results.style.width = "65%";
                results.style.maxWidth = "500px";
            }
        }
    }
}
function outputToDummy(content) {
    var dummy = document.getElementById("dummy");
    if (dummy instanceof HTMLDivElement) {
        dummy.innerHTML += ("\n" + content.toString());
    }
}
// add all event listeners
document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') { // Enter -> trigger calculation
        outputToResults();
    }
    else if (event.key === "q") { // Q -> toggle About Points Counter
        toggleAboutPointsCounter();
    }
});
document.addEventListener('click', function (event) {
    var target = event.target;
    if (target instanceof HTMLElement
        && !target.closest('.about-points-allocation-tag')
        && !target.closest('.about-points-allocation-button')
        && isAboutPointsCounterOn) {
        toggleAboutPointsCounter();
    }
});
