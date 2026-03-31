import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router'; // Navigasyon için bunu kullanıyoruz

export default function ChangePasswordScreen() {
  const router = useRouter();
  const [passwords, setPasswords] = useState({ current: '', new: '', confirm: '' });

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={styles.container}
    >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Şifre Değiştir</Text>
        <View style={{ width: 40 }} /> 
      </View>

      {/* Form Alanı */}
      <View style={styles.form}>
        <Text style={styles.label}>Mevcut Şifre</Text>
        <TextInput 
          style={styles.input} 
          secureTextEntry 
          placeholder="••••••••"
          placeholderTextColor="#999"
          onChangeText={(txt) => setPasswords({...passwords, current: txt})}
        />

        <Text style={styles.label}>Yeni Şifre</Text>
        <TextInput 
          style={styles.input} 
          secureTextEntry 
          placeholder="••••••••"
          placeholderTextColor="#999"
          onChangeText={(txt) => setPasswords({...passwords, new: txt})}
        />

        <Text style={styles.label}>Yeni Şifre (Tekrar)</Text>
        <TextInput 
          style={styles.input} 
          secureTextEntry 
          placeholder="••••••••"
          placeholderTextColor="#999"
          onChangeText={(txt) => setPasswords({...passwords, confirm: txt})}
        />

        <TouchableOpacity 
          style={styles.saveButton}
          onPress={() => alert('Şifre güncelleme isteği gönderildi!')}
        >
          <Text style={styles.saveButtonText}>Şifreyi Güncelle</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9F9FB' },
  header: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    paddingTop: 60, 
    paddingHorizontal: 20 
  },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#000' },
  backButton: { 
    width: 40, height: 40, backgroundColor: '#fff', borderRadius: 20, 
    justifyContent: 'center', alignItems: 'center', elevation: 2,
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 2
  },
  form: { padding: 25, marginTop: 20 },
  label: { fontSize: 14, fontWeight: '600', color: '#666', marginBottom: 8 },
  input: { 
    backgroundColor: '#fff', borderRadius: 12, padding: 15, marginBottom: 20, 
    borderWidth: 1, borderColor: '#EFEFEF', color: '#000'
  },
  saveButton: { 
    backgroundColor: '#34C759', padding: 16, borderRadius: 15, alignItems: 'center', marginTop: 10 
  },
  saveButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 }
});