import { TRPCError } from "@trpc/server";
import type { User } from "../../drizzle/schema";

/**
 * RBAC (Role-Based Access Control) for Project Joinity
 * Implements the Primary Researcher and Commander roles with 1.67x Resonance verification
 */

export const RESONANCE_SIGNATURE = "1.67x";

export type UserRole = "user" | "admin" | "researcher" | "commander";

export interface RBACContext {
  user: User | null;
}

/**
 * Check if user has the required role
 */
export function requireRole(requiredRole: UserRole) {
  return (user: User | null) => {
    if (!user) {
      throw new TRPCError({
        code: "UNAUTHORIZED",
        message: "User not authenticated",
      });
    }

    const roleHierarchy: Record<UserRole, number> = {
      user: 0,
      researcher: 1,
      admin: 2,
      commander: 3,
    };

    const userRoleLevel = roleHierarchy[user.role as UserRole] || 0;
    const requiredRoleLevel = roleHierarchy[requiredRole];

    if (userRoleLevel < requiredRoleLevel) {
      throw new TRPCError({
        code: "FORBIDDEN",
        message: `Insufficient permissions. Required role: ${requiredRole}`,
      });
    }
  };
}

/**
 * Verify the 1.67x Resonance Signature
 * This is the verification constant for Primary Researcher access
 */
export function verifyResonanceSignature(signature: string | null | undefined): boolean {
  return signature === RESONANCE_SIGNATURE;
}

/**
 * Check if user is Primary Researcher
 */
export function isPrimaryResearcher(user: User | null): boolean {
  if (!user) return false;
  return user.isResearcher === 1 && user.role === "researcher";
}

/**
 * Check if user is Commander
 */
export function isCommander(user: User | null): boolean {
  if (!user) return false;
  return user.role === "commander" && verifyResonanceSignature(user.resonanceSignature);
}
