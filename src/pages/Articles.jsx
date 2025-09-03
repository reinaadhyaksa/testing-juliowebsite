import { useState, useEffect } from 'react'
import ArticleCard from '../components/ArticleCard'
import ArticleForm from '../components/ArticleForm'
import { supabase } from '../services/supabase'
import { Loading, SectionHeader } from '../components/Template'
import Header from '../components/Header'
import { useAuth } from '../components/AuthContext' // Import useAuth

export default function Articles() {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [showForm, setShowForm] = useState(false)
    const { user } = useAuth() // Dapatkan status user

    useEffect(() => {
        fetchArticles()
    }, [])

    const fetchArticles = async () => {
        try {
            setLoading(true)
            const { data, error } = await supabase
                .from('artikel')
                .select('*')
                .order('tanggal_update', { ascending: false, nullsFirst: false })
                .order('tanggal_upload', { ascending: false })

            if (error) throw error

            setArticles(data || [])
        } catch (error) {
            console.error('Error fetching articles:', error)
        } finally {
            setLoading(false)
        }
    }

    const handleAddArticle = (newArticle) => {
        setArticles(prev => [newArticle, ...prev])
        setShowForm(false)
    }

    return (
        <>
            <Header />
            <div className="max-w-6xl mx-auto px-4 py-8 bg-gray-900">
                <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gray-900">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <SectionHeader
                            title={"Artikel Hukum & Notaris Cirebon"}
                            description={"Kumpulan artikel informatif tentang hukum, notaris, dan PPAT untuk membantu Anda memahami berbagai aspek legal di wilayah Cirebon."}
                            darkMode={true}
                        />
                    </div>
                </section>

                <div className="flex justify-between items-center mb-6 md:mb-8">
                    <h1 className="text-xl md:text-3xl font-bold text-white" data-aos="fade-up">
                        Artikel Notaris & PPAT Cirebon
                    </h1>
                    {/* Hanya tampilkan tombol jika user sudah login */}
                    {user && (
                        <button
                            onClick={() => setShowForm(!showForm)}
                            className="flex items-center justify-center gap-2 p-2 md:px-4 md:py-2 bg-gold-500 text-gray-900 rounded-full md:rounded-lg hover:bg-gold-600 transition-all duration-300 shadow-md hover:shadow-lg font-medium"
                            data-aos="fade-up"
                            aria-label={showForm ? 'Batal tambah artikel' : 'Tambah artikel'}
                        >
                            {showForm ? (
                                <>
                                    <span className="hidden md:inline">Tutup</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </>
                            ) : (
                                <>
                                    <span className="hidden md:inline">Tambah Artikel</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                                    </svg>
                                </>
                            )}
                        </button>
                    )}
                </div>

                {showForm && (
                    <div className="mb-8 md:mb-12" data-aos="fade-up">
                        <ArticleForm onArticleAdded={handleAddArticle} darkMode={true} />
                    </div>
                )}

                {loading ? (
                    <Loading />
                ) : articles.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-gray-400">Belum ada artikel yang tersedia.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {articles.map((article) => (
                            <ArticleCard key={article.id} article={article} darkMode={true} />
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}