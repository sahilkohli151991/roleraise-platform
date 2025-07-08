import { users, assessments, testimonials, mentors, type User, type InsertUser, type Assessment, type InsertAssessment, type Testimonial, type InsertTestimonial, type Mentor, type InsertMentor } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createAssessment(assessment: InsertAssessment): Promise<Assessment>;
  getAssessments(): Promise<Assessment[]>;
  
  getTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  
  getMentors(): Promise<Mentor[]>;
  createMentor(mentor: InsertMentor): Promise<Mentor>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private assessments: Map<number, Assessment>;
  private testimonials: Map<number, Testimonial>;
  private mentors: Map<number, Mentor>;
  private currentUserId: number;
  private currentAssessmentId: number;
  private currentTestimonialId: number;
  private currentMentorId: number;

  constructor() {
    this.users = new Map();
    this.assessments = new Map();
    this.testimonials = new Map();
    this.mentors = new Map();
    this.currentUserId = 1;
    this.currentAssessmentId = 1;
    this.currentTestimonialId = 1;
    this.currentMentorId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createAssessment(insertAssessment: InsertAssessment): Promise<Assessment> {
    const id = this.currentAssessmentId++;
    const assessment: Assessment = { 
      ...insertAssessment, 
      id, 
      createdAt: new Date()
    };
    this.assessments.set(id, assessment);
    return assessment;
  }

  async getAssessments(): Promise<Assessment[]> {
    return Array.from(this.assessments.values());
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = this.currentTestimonialId++;
    const testimonial: Testimonial = { 
      ...insertTestimonial, 
      id,
      avatarUrl: insertTestimonial.avatarUrl || null,
      salaryIncrease: insertTestimonial.salaryIncrease || null,
      rating: insertTestimonial.rating || null
    };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }

  async getMentors(): Promise<Mentor[]> {
    return Array.from(this.mentors.values());
  }

  async createMentor(insertMentor: InsertMentor): Promise<Mentor> {
    const id = this.currentMentorId++;
    const mentor: Mentor = { 
      ...insertMentor, 
      id,
      avatarUrl: insertMentor.avatarUrl || null,
      experience: insertMentor.experience || null
    };
    this.mentors.set(id, mentor);
    return mentor;
  }
}

export const storage = new MemStorage();
