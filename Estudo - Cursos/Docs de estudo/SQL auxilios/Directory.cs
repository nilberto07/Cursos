using System;
using System.IO;

namespace file_fileinfo_e_ioException
{
    class Program
    {
        static void Main(string[] args)
        {
            string caminhoOrigem = @"c:\file";

            try
            {// "*.*": mascara de busca. Qualquer nome de arquivo*. e qualquer extensao de aquivo.*
                var folder = Directory.EnumerateDirectories(caminhoOrigem, "*.*", SearchOption.AllDirectories);
                Console.WriteLine("Pastas: ");
                foreach (string s in folder)
                {
                    Console.WriteLine(s);
                }
                Console.WriteLine();

                var file = Directory.EnumerateFiles(caminhoOrigem, "*.*", SearchOption.AllDirectories);
                Console.WriteLine("Files: ");
                foreach (string s in file)
                {
                    Console.WriteLine(s);
                }
                //Criar novas Pastas
                Directory.CreateDirectory(@"c:\file\newfolder");
                //Ou poderia ser
                //Directory.CreateDirectory(caminhoOrigem + @"\newfolder");

            }

            catch (IOException e)
            {
                Console.WriteLine("Um erro ocorreu...");
                Console.WriteLine(e.Message);
            }

        }
    }
}
