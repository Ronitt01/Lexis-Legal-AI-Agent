export interface Citation {
  id: string;
  page: number;
  text: string;
  context: string;
  confidence: number;
}

export interface LegalDocument {
  id: string;
  name: string;
  content: string; // The text content parsed
  size: string;
  uploadedAt: string;
  isSample?: boolean;
}

export interface WorkspaceMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  citations?: Citation[];
  confidence?: number; // 0 to 100
  timestamp: string;
}

export interface LegalQuestionRequest {
  documentId: string;
  question: string;
  customDocuments?: LegalDocument[];
}

export interface AnalysisResponse {
  answer: string;
  confidence: number;
  citations: Citation[];
}
