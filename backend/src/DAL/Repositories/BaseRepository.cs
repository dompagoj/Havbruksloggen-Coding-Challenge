using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using BL.Entities;
using Microsoft.EntityFrameworkCore;

namespace DAL.Repositories
{
    public class BaseRepository<T> where T : BaseEntity
    {
        protected readonly AppDbContext _dbContext;

        public BaseRepository(AppDbContext dbContext) => _dbContext = dbContext;

        public virtual Task<T?> Find(int id) => _dbContext.Set<T>().FirstOrDefaultAsync(t => t.Id == id)!;

        public Task<List<T>> Find() => _dbContext.Set<T>().ToListAsync();

        public Task<List<T>> Find(Expression<Func<T, bool>> where) =>
            _dbContext.Set<T>().Where(where).ToListAsync();

        public Task<int> Count() => _dbContext.Set<T>().CountAsync();

        public async Task<T> Create(T entity)
        {
            await _dbContext.Set<T>().AddAsync(entity);
            await _dbContext.SaveChangesAsync();

            return entity;
        }

        protected async Task<T> Update(T entity)
        {
            _dbContext.Entry(entity).State = EntityState.Modified;
            await _dbContext.SaveChangesAsync();

            return entity;
        }

        public async Task Delete(T entity)
        {
            _dbContext.Set<T>().Remove(entity);
            await _dbContext.SaveChangesAsync();
        }

        public async Task<bool> Delete(int id)
        {
            var entity = await _dbContext.Set<T>().FindAsync(id);
            if (entity == null) return false;

            _dbContext.Remove(entity);
            await _dbContext.SaveChangesAsync();

            return true;
        }
    }
}
