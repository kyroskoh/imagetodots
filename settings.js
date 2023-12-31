class Settings {
  constructor(
    isDrawingDebug = false,
    CELL_SIZE = 50,
    dotsToAdd = 500,
    dotSpeed = 0.2,
    maxDotRadius = 10,
    minDotRadius = 3,
    decelleration = 0.008,
    radiusChangeRate = 0.1,
    collisionRadiusMultiplier = 1.1,
    steeringStrength = 0.05,
    minSpeedPercentage = 0.15,
    debugDetectionRadius = maxDotRadius + 50,
    colored = false,
    centeringFactor = 0.05,
    alignmentFactor = 0.8,
    separationFactor = 0.1,
    turnTowardsLightFactor = 0.01,
    steerFromMouseFactor = 3,
    slownessFactor = 0.75,
    windFactor = 0,
    visionDotProductThreshold = -0.5,
    slowDotProductThreshold = 0.5
  ) {
    this.isDrawingDebug = isDrawingDebug;
    this.CELL_SIZE = CELL_SIZE;
    this.dotsToAdd = dotsToAdd;
    this.dotSpeed = dotSpeed;
    this.maxDotRadius = maxDotRadius;
    this.minDotRadius = minDotRadius;
    this.decelleration = decelleration;
    this.radiusChangeRate = radiusChangeRate;
    this.collisionRadiusMultiplier = collisionRadiusMultiplier;
    this.steeringStrength = steeringStrength;
    this.minSpeedPercentage = minSpeedPercentage;
    this.debugDetectionRadius = debugDetectionRadius;
    this.colored = colored;
    this.centeringFactor = centeringFactor;
    this.alignmentFactor = alignmentFactor;
    this.separationFactor = separationFactor;
    this.turnTowardsLightFactor = turnTowardsLightFactor;
    this.steerFromMouseFactor = steerFromMouseFactor;
    this.slownessFactor = slownessFactor;
    this.windFactor = windFactor;
    this.visionDotProductThreshold = visionDotProductThreshold;
    this.slowDotProductThreshold = slowDotProductThreshold;
  }
}

class Debug_Settings extends Settings {
  constructor() {
    super();
    this.isDrawingDebug = true;
    // this.dotSpeed = 0.5;

    this.CELL_SIZE = 50; // i think this works best at 30, but it's slow
    // this.dotsToAdd = 5000;
    this.dotSpeed = 0.9;
    this.maxDotRadius = 10;
    this.minDotRadius = 0.001;
    this.centeringFactor = 0.1; // .1
    this.alignmentFactor = 0.1; // .2
    this.turnTowardsLightFactor = 0.001;
    this.separationFactor = 1;
  }
}
const debugSettings = new Debug_Settings();

class MoreDots_Settings extends Settings {
  constructor() {
    super();
    // this.isDrawingDebug = true;
    this.CELL_SIZE = 20; // i think this works best at 30, but it's slow
    this.dotsToAdd = 3000;
    this.dotSpeed = 0.5;
    this.maxDotRadius = 10;
    this.minDotRadius = 0.001;
    this.centeringFactor = 0.1; //.1
    this.alignmentFactor = 1; // .1
    this.turnTowardsLightFactor = 0.001;
    this.separationFactor = 1;
    this.slownessFactor = 0.1;
    // this.radiusChangeRate = 0.01;
  }
}
const moreDotsSettings = new MoreDots_Settings();

const currentSettings = moreDotsSettings;

export { currentSettings };
