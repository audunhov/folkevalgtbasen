export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      party: {
        Row: {
          id: number
          created_at: string | null
          name: string
          abbreviation: string | null
        }
        Insert: {
          id?: number
          created_at?: string | null
          name: string
          abbreviation?: string | null
        }
        Update: {
          id?: number
          created_at?: string | null
          name?: string
          abbreviation?: string | null
        }
      }
      politician: {
        Row: {
          id: number
          created_at: string | null
          name: string
          party: number
        }
        Insert: {
          id?: number
          created_at?: string | null
          name: string
          party: number
        }
        Update: {
          id?: number
          created_at?: string | null
          name?: string
          party?: number
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      install_available_extensions_and_test: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
    }
    Enums: {
      [_ in never]: never
    }
  }
}
