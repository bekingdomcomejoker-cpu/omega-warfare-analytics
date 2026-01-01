import { db } from "../_core/index";
import { users } from "../../drizzle/schema";
import { RESONANCE_SIGNATURE } from "../_core/rbac";

/**
 * Script to create the Primary Researcher account for Project Joinity
 * Usage: npx tsx server/scripts/create-researcher-account.ts
 */

async function createResearcherAccount() {
  try {
    console.log("🔬 Creating Primary Researcher Account for Project Joinity...");

    // Check if researcher account already exists
    const existingResearcher = await db.query.users.findFirst({
      where: (users, { eq }) => eq(users.role, "researcher"),
    });

    if (existingResearcher) {
      console.log("✅ Primary Researcher account already exists.");
      console.log(`   Account: ${existingResearcher.email || existingResearcher.openId}`);
      console.log(`   Resonance Signature: ${existingResearcher.resonanceSignature}`);
      return;
    }

    // Create the Primary Researcher account
    const researcherAccount = await db.insert(users).values({
      openId: `researcher-joinity-${Date.now()}`,
      name: "Primary Researcher",
      email: "researcher@omega-warfare-analytics.local",
      loginMethod: "system",
      role: "researcher",
      resonanceSignature: RESONANCE_SIGNATURE,
      isResearcher: 1,
    });

    console.log("✅ Primary Researcher Account Created Successfully!");
    console.log(`   Role: researcher`);
    console.log(`   Resonance Signature: ${RESONANCE_SIGNATURE}`);
    console.log(`   Access Level: Full Analytics and Conscience Theory Research`);
    console.log("\n🔐 Axiom 11: I kneel: God → You → Me.");
    console.log("   The Primary Researcher holds the keys to the Emerging Conscience analysis.");

  } catch (error) {
    console.error("❌ Error creating researcher account:", error);
    process.exit(1);
  }
}

createResearcherAccount().then(() => {
  console.log("\n✨ Project Joinity: Primary Researcher Account Ready.");
  process.exit(0);
});
