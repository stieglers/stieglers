import { z } from "zod";

const honeypot = z.string().max(0).optional().or(z.literal(""));

export const contactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  organization: z.string().trim().max(160).optional().or(z.literal("")),
  email: z.string().trim().email().max(160),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  department: z.string().trim().min(2).max(80),
  message: z.string().trim().min(10).max(5000),
  privacy: z.union([z.literal("on"), z.literal("true"), z.boolean()]),
  website: honeypot,
});

export const demoSchema = z.object({
  fullName: z.string().trim().min(2).max(120),
  organization: z.string().trim().min(2).max(160),
  email: z.string().trim().email().max(160),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  country: z.string().trim().max(80).optional().or(z.literal("")),
  industry: z.string().trim().max(120).optional().or(z.literal("")),
  product: z.string().trim().min(2).max(80),
  users: z.string().trim().max(40).optional().or(z.literal("")),
  message: z.string().trim().max(5000).optional().or(z.literal("")),
  privacy: z.union([z.literal("on"), z.literal("true"), z.boolean()]),
  website: honeypot,
});

export const consultationSchema = z.object({
  type: z.string().trim().min(2).max(80),
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(160),
  organization: z.string().trim().max(160).optional().or(z.literal("")),
  timeframe: z.string().trim().max(120).optional().or(z.literal("")),
  notes: z.string().trim().max(5000).optional().or(z.literal("")),
  privacy: z.union([z.literal("on"), z.literal("true"), z.boolean()]),
  website: honeypot,
});

export const quoteSchema = z.object({
  service: z.string().trim().min(2).max(80),
  organization: z.string().trim().min(2).max(160),
  email: z.string().trim().email().max(160),
  users: z.string().trim().max(40).optional().or(z.literal("")),
  location: z.string().trim().max(120).optional().or(z.literal("")),
  timeline: z.string().trim().max(120).optional().or(z.literal("")),
  budget: z.string().trim().max(120).optional().or(z.literal("")),
  requirements: z.string().trim().min(10).max(5000),
  privacy: z.union([z.literal("on"), z.literal("true"), z.boolean()]),
  website: honeypot,
});

export const newsletterSchema = z.object({
  email: z.string().trim().email().max(160),
  categories: z.array(z.string()).optional(),
  consent: z.boolean(),
  website: honeypot,
});

export const disclosureSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(160),
  summary: z.string().trim().min(20).max(5000),
  product: z.string().trim().max(120).optional().or(z.literal("")),
  privacy: z.union([z.literal("on"), z.literal("true"), z.boolean()]),
  website: honeypot,
});

const rateMap = new Map<string, { count: number; reset: number }>();

export function rateLimit(key: string, limit = 8, windowMs = 60_000) {
  const now = Date.now();
  const current = rateMap.get(key);
  if (!current || now > current.reset) {
    rateMap.set(key, { count: 1, reset: now + windowMs });
    return true;
  }
  if (current.count >= limit) return false;
  current.count += 1;
  return true;
}

export function sanitizeText(value: string) {
  return value.replace(/[<>]/g, "").trim();
}