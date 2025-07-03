export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      categories: {
        Row: {
          created_at: string | null
          descripcion: string | null
          id: string
          imagen_url: string | null
          nombre_categoria: string
        }
        Insert: {
          created_at?: string | null
          descripcion?: string | null
          id?: string
          imagen_url?: string | null
          nombre_categoria: string
        }
        Update: {
          created_at?: string | null
          descripcion?: string | null
          id?: string
          imagen_url?: string | null
          nombre_categoria?: string
        }
        Relationships: []
      }
      order_items: {
        Row: {
          created_at: string | null
          id: string
          order_id: string
          product_id: string
          quantity: number
          unit_price: number
        }
        Insert: {
          created_at?: string | null
          id?: string
          order_id: string
          product_id: string
          quantity?: number
          unit_price: number
        }
        Update: {
          created_at?: string | null
          id?: string
          order_id?: string
          product_id?: string
          quantity?: number
          unit_price?: number
        }
        Relationships: [
          {
            foreignKeyName: "order_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          buyer_email: string
          buyer_name: string
          buyer_phone: string
          created_at: string | null
          estado_pedido: Database["public"]["Enums"]["order_status"] | null
          id: string
          shipping_address: string | null
          total_bs: number | null
          total_usd: number
          updated_at: string | null
          user_id: string
        }
        Insert: {
          buyer_email: string
          buyer_name: string
          buyer_phone: string
          created_at?: string | null
          estado_pedido?: Database["public"]["Enums"]["order_status"] | null
          id?: string
          shipping_address?: string | null
          total_bs?: number | null
          total_usd: number
          updated_at?: string | null
          user_id: string
        }
        Update: {
          buyer_email?: string
          buyer_name?: string
          buyer_phone?: string
          created_at?: string | null
          estado_pedido?: Database["public"]["Enums"]["order_status"] | null
          id?: string
          shipping_address?: string | null
          total_bs?: number | null
          total_usd?: number
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "orders_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      payment_methods: {
        Row: {
          campos_personalizados: Json | null
          created_at: string | null
          id: string
          is_active: boolean | null
          nombre_metodo: string
          tipo: string
          updated_at: string | null
        }
        Insert: {
          campos_personalizados?: Json | null
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          nombre_metodo: string
          tipo: string
          updated_at?: string | null
        }
        Update: {
          campos_personalizados?: Json | null
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          nombre_metodo?: string
          tipo?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      payments: {
        Row: {
          banco: string | null
          cedula: string | null
          comentario_admin: string | null
          correo: string
          created_at: string | null
          estado_pago: Database["public"]["Enums"]["payment_status"] | null
          id: string
          imagen_comprobante: string | null
          monto: number
          nombre_titular: string
          order_id: string
          payment_method_id: string
          referencia: string | null
          telefono: string
          updated_at: string | null
        }
        Insert: {
          banco?: string | null
          cedula?: string | null
          comentario_admin?: string | null
          correo: string
          created_at?: string | null
          estado_pago?: Database["public"]["Enums"]["payment_status"] | null
          id?: string
          imagen_comprobante?: string | null
          monto: number
          nombre_titular: string
          order_id: string
          payment_method_id: string
          referencia?: string | null
          telefono: string
          updated_at?: string | null
        }
        Update: {
          banco?: string | null
          cedula?: string | null
          comentario_admin?: string | null
          correo?: string
          created_at?: string | null
          estado_pago?: Database["public"]["Enums"]["payment_status"] | null
          id?: string
          imagen_comprobante?: string | null
          monto?: number
          nombre_titular?: string
          order_id?: string
          payment_method_id?: string
          referencia?: string | null
          telefono?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "payments_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payments_payment_method_id_fkey"
            columns: ["payment_method_id"]
            isOneToOne: false
            referencedRelation: "payment_methods"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          año: number | null
          artista: string
          categoria_id: string | null
          created_at: string | null
          descripcion: string | null
          dimensiones_alto: number
          dimensiones_ancho: number
          id: string
          imagen_url: string | null
          is_available: boolean | null
          is_featured: boolean | null
          is_on_sale: boolean | null
          nombre_obra: string
          precio: number
          sale_price: number | null
          tecnica: Database["public"]["Enums"]["art_technique"]
          updated_at: string | null
        }
        Insert: {
          año?: number | null
          artista: string
          categoria_id?: string | null
          created_at?: string | null
          descripcion?: string | null
          dimensiones_alto: number
          dimensiones_ancho: number
          id?: string
          imagen_url?: string | null
          is_available?: boolean | null
          is_featured?: boolean | null
          is_on_sale?: boolean | null
          nombre_obra: string
          precio: number
          sale_price?: number | null
          tecnica: Database["public"]["Enums"]["art_technique"]
          updated_at?: string | null
        }
        Update: {
          año?: number | null
          artista?: string
          categoria_id?: string | null
          created_at?: string | null
          descripcion?: string | null
          dimensiones_alto?: number
          dimensiones_ancho?: number
          id?: string
          imagen_url?: string | null
          is_available?: boolean | null
          is_featured?: boolean | null
          is_on_sale?: boolean | null
          nombre_obra?: string
          precio?: number
          sale_price?: number | null
          tecnica?: Database["public"]["Enums"]["art_technique"]
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "products_categoria_id_fkey"
            columns: ["categoria_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          created_at: string | null
          email: string
          id: string
          nombre: string
          rol: Database["public"]["Enums"]["user_role"]
          telefono: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: string
          nombre: string
          rol?: Database["public"]["Enums"]["user_role"]
          telefono?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: string
          nombre?: string
          rol?: Database["public"]["Enums"]["user_role"]
          telefono?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_user_role: {
        Args: { user_id: string }
        Returns: string
      }
    }
    Enums: {
      art_size: "pequeño" | "mediano" | "grande"
      art_technique:
        | "oleo"
        | "acrilico"
        | "acuarela"
        | "mixta"
        | "carboncillo"
        | "pastel"
      order_status:
        | "pending_verification"
        | "approved"
        | "rejected"
        | "dispatched"
        | "delivered"
      payment_status: "pending" | "approved" | "rejected"
      user_role: "admin" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      art_size: ["pequeño", "mediano", "grande"],
      art_technique: [
        "oleo",
        "acrilico",
        "acuarela",
        "mixta",
        "carboncillo",
        "pastel",
      ],
      order_status: [
        "pending_verification",
        "approved",
        "rejected",
        "dispatched",
        "delivered",
      ],
      payment_status: ["pending", "approved", "rejected"],
      user_role: ["admin", "user"],
    },
  },
} as const
