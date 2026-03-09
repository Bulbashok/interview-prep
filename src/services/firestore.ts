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
} from 'firebase/firestore';
import { db } from '@/config/firebase';

export const firestoreService = {
  async getDocument<T extends DocumentData>(
    collectionName: string,
    documentId: string,
  ): Promise<T | null> {
    const docRef = doc(db, collectionName, documentId);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? (docSnap.data() as T) : null;
  },

  async setDocument(collectionName: string, documentId: string, data: DocumentData): Promise<void> {
    const docRef = doc(db, collectionName, documentId);
    await setDoc(docRef, data);
  },

  async updateDocument(
    collectionName: string,
    documentId: string,
    data: Partial<DocumentData>,
  ): Promise<void> {
    const docRef = doc(db, collectionName, documentId);
    await updateDoc(docRef, data);
  },

  async deleteDocument(collectionName: string, documentId: string): Promise<void> {
    const docRef = doc(db, collectionName, documentId);
    await deleteDoc(docRef);
  },

  async getCollection<T extends DocumentData>(
    collectionName: string,
    constraints: QueryConstraint[] = [],
  ): Promise<T[]> {
    const collectionRef = collection(db, collectionName);
    const q = query(collectionRef, ...constraints);
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as unknown as T[];
  },

  async queryCollection<T extends DocumentData>(
    collectionName: string,
    field: string,
    operator: WhereFilterOp,
    value: unknown,
  ): Promise<T[]> {
    const collectionRef = collection(db, collectionName);
    const q = query(collectionRef, where(field, operator, value));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as unknown as T[];
  },

  async getOrderedCollection<T extends DocumentData>(
    collectionName: string,
    field: string,
    direction: 'asc' | 'desc' = 'asc',
    limitCount?: number,
  ): Promise<T[]> {
    const constraints: QueryConstraint[] = [orderBy(field, direction)];
    if (limitCount) {
      constraints.push(limit(limitCount));
    }
    return this.getCollection<T>(collectionName, constraints);
  },
};
