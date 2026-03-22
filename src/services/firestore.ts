import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  QueryConstraint,
  WhereFilterOp,
  DocumentData,
  FirestoreError,
} from 'firebase/firestore';
import { db } from '@/config/firebase';

const handleFirestoreError = (error: unknown, operation: string): never => {
  if (error instanceof FirestoreError) {
    switch (error.code) {
      case 'permission-denied':
        throw new Error(`Firestore: нет доступа к ${operation}`);
      case 'unavailable':
        throw new Error(`Firestore: сервис недоступен, проверьте соединение`);
      case 'not-found':
        throw new Error(`Firestore: ${operation} не найден`);
      case 'already-exists':
        throw new Error(`Firestore: документ уже существует`);
      case 'invalid-argument':
        throw new Error(`Firestore: некорректные параметры для ${operation}`);
      default:
        throw new Error(`Firestore: ошибка при ${operation} (${error.code})`);
    }
  }

  if (error instanceof Error) {
    throw error;
  }

  throw new Error(`Firestore: неизвестная ошибка при ${operation}`);
};

export const firestoreService = {
  async getDocument<T extends DocumentData>(
    collectionName: string,
    documentId: string,
  ): Promise<T | null> {
    try {
      const docRef = doc(db, collectionName, documentId);
      const docSnap = await getDoc(docRef);
      return docSnap.exists() ? (docSnap.data() as T) : null;
    } catch (error) {
      return handleFirestoreError(error, `получением документа из ${collectionName}`);
    }
  },

  async setDocument(collectionName: string, documentId: string, data: DocumentData): Promise<void> {
    try {
      const docRef = doc(db, collectionName, documentId);
      await setDoc(docRef, data);
    } catch (error) {
      handleFirestoreError(error, `созданием документа в ${collectionName}`);
    }
  },

  async updateDocument(
    collectionName: string,
    documentId: string,
    data: Partial<DocumentData>,
  ): Promise<void> {
    try {
      const docRef = doc(db, collectionName, documentId);
      await updateDoc(docRef, data);
    } catch (error) {
      handleFirestoreError(error, `обновлением документа в ${collectionName}`);
    }
  },

  async deleteDocument(collectionName: string, documentId: string): Promise<void> {
    try {
      const docRef = doc(db, collectionName, documentId);
      await deleteDoc(docRef);
    } catch (error) {
      handleFirestoreError(error, `удалением документа из ${collectionName}`);
    }
  },

  async getCollection<T extends DocumentData>(
    collectionName: string,
    constraints: QueryConstraint[] = [],
  ): Promise<T[]> {
    try {
      const collectionRef = collection(db, collectionName);
      const q = query(collectionRef, ...constraints);
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as unknown as T[];
    } catch (error) {
      return handleFirestoreError(error, `получением коллекции ${collectionName}`);
    }
  },

  async queryCollection<T extends DocumentData>(
    collectionName: string,
    field: string,
    operator: WhereFilterOp,
    value: unknown,
  ): Promise<T[]> {
    try {
      const collectionRef = collection(db, collectionName);
      const q = query(collectionRef, where(field, operator, value));
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as unknown as T[];
    } catch (error) {
      return handleFirestoreError(error, `запросом к коллекции ${collectionName}`);
    }
  },

  async getOrderedCollection<T extends DocumentData>(
    collectionName: string,
    field: string,
    direction: 'asc' | 'desc' = 'asc',
    limitCount?: number,
  ): Promise<T[]> {
    try {
      const constraints: QueryConstraint[] = [orderBy(field, direction)];
      if (limitCount) {
        constraints.push(limit(limitCount));
      }
      return this.getCollection<T>(collectionName, constraints);
    } catch (error) {
      return handleFirestoreError(error, `получением упорядоченной коллекции ${collectionName}`);
    }
  },
};
